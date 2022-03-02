import './App.css';
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './RecipeList';

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put Salt on Chicken\n2. Put Chicken in oven\n3. Eat Chicken',
  },

  {
    id: uuidv4(),
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on Pork\n2. Put Pork in oven\n3. Eat Pork',
  },
];

export default App;
