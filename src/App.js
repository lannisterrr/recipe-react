import './styles/App.css';
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './components/RecipeList';
import React, { useState } from 'react';

export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const recipeContextValue = {
    handleDelete,
    handleAdd,
  };

  function handleDelete(id) {
    const filteredRecipe = recipes.filter(recipe => recipe.id !== id);
    setRecipes(filteredRecipe);
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
