import React from 'react';

export default function RecipeIngredientEdit(props) {
  const { ingredient, handleIngredientChange } = props;

  function handleChange(changes) {
    console.log(changes);
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onInput={e => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onInput={e => handleChange({ amount: e.target.value })}
      />
      <button className="btn btn-danger t-c-1 f-8 ingredient-delete round-corner">
        &times;
      </button>
    </>
  );
}
