import React, { useContext } from 'react';
import RecpeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from '../App';

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes }); // we are creating a brand new object with(...) that has everyting from recipe + the changes
    // we are the mutating the object here ,
    // 1st iteration : {...recipe , recipe.name : e.target.value}
    // we are overRiding 'name' in recipe from 'name' in changes.
  }

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
          onInput={e => handleChange({ name: e.target.value })}
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
          onInput={e => handleChange({ cookTime: e.target.value })}
        />

        <label className="f-6 f-bold" htmlFor="servings">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onInput={e =>
            handleChange({ servings: parseInt(e.target.value) || '' })
          }
        />

        <label className="f-6 f-bold" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="recipe-edit__input"
          name="instructions"
          id="instructions"
          onInput={e => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
        />
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
