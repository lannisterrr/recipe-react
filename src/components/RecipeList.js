import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from '../App';
import SearchBar from './SearchBar';

function RecipeList({ recipes }) {
  const { handleAdd } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <SearchBar />
      <div>
        {recipes.map(recipe => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-button-container">
        <button
          onClick={handleAdd}
          className="btn btn-accent t-c-1 recipe__add-button"
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeList;
