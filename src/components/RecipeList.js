import React from 'react';
import Recipe from './Recipe';

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-button-container">
        <button class="btn btn-accent t-c-1 recipe__add-button">
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeList;
