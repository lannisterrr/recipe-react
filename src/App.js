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
  const [show, setShow] = useState(false);

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
  };

  function handleDelete(id) {
    const filteredRecipe = recipes.filter(recipe => recipe.id !== id);
    setRecipes(filteredRecipe);
    setShow(true);
  }

  function handleAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 3,
      cookTime: '1:00',
      instructions: 'Instr...',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '2 Pounds',
        },
      ],
    };
    setRecipes(prevRevipe => [...prevRevipe, newRecipe]);
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      <RecipeEdit />
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
