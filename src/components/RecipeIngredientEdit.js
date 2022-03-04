import React from 'react';

export default function RecipeIngredientEdit() {
  return (
    <>
      <input className="recipe-edit__input" type="text" />
      <input className="recipe-edit__input" type="text" />
      <button className="btn btn-danger t-c-1 f-8 ingredient-delete round-corner">
        &times;
      </button>
    </>
  );
}
