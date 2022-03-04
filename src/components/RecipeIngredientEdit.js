import React from 'react';

export default function RecipeIngredientEdit({ ingredient }) {
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
      />
      <button className="btn btn-danger t-c-1 f-8 ingredient-delete round-corner">
        &times;
      </button>
    </>
  );
}
