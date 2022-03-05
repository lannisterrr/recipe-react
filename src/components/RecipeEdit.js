import React, { useContext } from 'react';
import RecpeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from '../App';
import { v4 } from 'uuid';

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleEdit } = useContext(RecipeContext);

  // a helper function to get all the changes in an object
  function handleChange(changes) {
    // call the handleRecipeChange function with the id and the recipeWithChange
    handleRecipeChange(recipe.id, { ...recipe, ...changes }); // we are creating a brand new object with(...) that has everyting from recipe + the changes
    // we are the mutating the object here ,
    // 1st iteration : {...recipe , recipe.name : e.target.value}
    // we are overRiding 'name' in recipe from 'name' in changes.
  }

  function handleIngredientChange(id, ingredientWithChange) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(i => i.id === id);
    newIngredients[index] = ingredientWithChange;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: v4(),
      name: '',
      amount: '',
    };

    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function handleIngredientDelete(id) {
    handleChange({ ingredients: recipe.ingredients.filter(i => i.id !== id) });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          onClick={() => handleEdit(undefined)}
          className="btn recipe-edit__remove-button"
        >
          &times;
        </button>
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
          onChange={e => handleChange({ name: e.target.value })}
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
          onChange={e => handleChange({ cookTime: e.target.value })}
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
          onChange={e =>
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
          onChange={e => handleChange({ instructions: e.target.value })}
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
            <RecpeIngredientEdit
              key={ingredient.id}
              ingredient={ingredient}
              handleIngredientChange={handleIngredientChange}
              handleIngredientDelete={handleIngredientDelete}
            />
          </>
        ))}
      </div>
      <div className="recipe-list__add-button-container m-v-8">
        <button
          onClick={handleIngredientAdd}
          className="btn btn-accent t-c-1 recipe__add-button f-bold"
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
