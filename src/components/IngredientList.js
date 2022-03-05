import React from 'react';
import Ingredient from './Ingredient';

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  return (
    <>
      <div className="ingredient-grid f-6 m-v-4 ">{ingredientElements}</div>
      <div className="author-text-container">
        <p className="heading-4 t-c-3 author-text p-4">
          <span className="t-c-1">Author : </span> &nbsp; Siddhant
        </p>
      </div>
    </>
  );
}
