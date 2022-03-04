import React from 'react';
import RecpeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit({ recipe }) {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="f-6 f-bold" htmlFor="name">
          Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="name"
          value={recipe.name}
          id="name"
        />

        <label className="f-6 f-bold" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
        />

        <label className="f-6 f-bold" htmlFor="servings">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="servings"
          id="servings"
          value={recipe.servings}
        />

        <label className="f-6 f-bold" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="recipe-edit__input"
          name="instructions"
          id="instructions"
          value={recipe.instructions}
        ></textarea>
      </div>
      <br />
      <label className="f-6 f-bold">Ingredients</label>
      <div className="recipe-edit__ingredients-grid">
        <div className="f-6 f-bold">Name</div>
        <div className="f-6 f-bold">Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => (
          <>
            <RecpeIngredientEdit key={ingredient.id} ingredient={ingredient} />
          </>
        ))}
      </div>
      <div className="recipe-list__add-button-container m-v-8">
        <button className="btn btn-accent t-c-1 recipe__add-button f-bold">
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
