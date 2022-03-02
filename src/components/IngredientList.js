import React from 'react';
import Ingredient from './Ingredient';

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  return <div className="ingredient-grid f-6 m-v-4 ">{ingredientElements}</div>;
}
