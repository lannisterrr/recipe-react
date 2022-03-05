import './styles/App.css';
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './components/RecipeList';
import RecipeEdit from './components/RecipeEdit';
import Alert from './components/Alert';
import React, { useState, useEffect } from 'react';

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = 'recipeReact.key';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeID, setSelectedRecipeID] = useState();
  const [show, setShow] = useState(false);

  //The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeID);

  // console.log(selectedRecipe);

  useEffect(() => {
    if (show) {
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false);
      }, 2000);

      return () => {
        clearTimeout(timeId);
      };
    }
  }, [show]);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    recipeJSON && setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleDelete,
    handleAdd,
    show,
    handleEdit,
    handleRecipeChange,
  };

  function handleDelete(id) {
    const filteredRecipe = recipes.filter(recipe => recipe.id !== id);
    setRecipes(filteredRecipe);
    setShow(true);
  }

  function handleEdit(id) {
    setSelectedRecipeID(id);
  }

  function handleAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '2 Pounds',
        },
      ],
    };
    setSelectedRecipeID(newRecipe.id);
    setRecipes(prevRevipe => [...prevRevipe, newRecipe]);
  }

  //1. return a brand new object to the setState with all the changes
  // pass the id of the clicked recipe , and the new recipe object with all the changes
  function handleRecipeChange(id, recipeWithChange) {
    const newRecipe = [...recipes]; // make a copy of recipe array
    const index = newRecipe.findIndex(r => r.id === id); // find the index of item in newRecipe array that matches with id
    newRecipe[index] = recipeWithChange; // swapping that  recipe with that index in our array , which got changed and replace it with the new recipe.
    setRecipes(newRecipe); // setState with the new array
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {/* initially selectedRecipe is undefined don't render */}
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      {show && <Alert />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put Salt on Chicken\n2. Put Chicken in oven\n3. Eat Chicken',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Chicken',
        amount: '2 Pounds',
      },
      {
        id: uuidv4(),
        name: 'salt',
        amount: '1 Tbps',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on Pork\n2. Put Pork in oven\n3. Eat Pork',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Pork',
        amount: '3 Pounds',
      },
      {
        id: uuidv4(),
        name: 'Paparika',
        amount: '2 Tbps',
      },
    ],
  },
];

export default App;
