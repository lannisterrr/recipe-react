import React from 'react';
import IngredientList from './IngredientList';

export default function Recipe(props) {
  const { name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div className="recipe">
      <header className="recipe__header p-h-4">
        <h3 className="t-c-3 heading-3">{name}</h3>
        <div className="button-wrapper">
          <button class="btn btn-accent m-h-3 t-c-1">Edit</button>
          <button class="btn btn-danger m-h-3 t-c-1">Delete</button>
        </div>
      </header>
      <main className="p-h-4 ">
        <div className="p-v-2">
          <span className="f-6 f-bold">Cook Time: </span>
          <span className="f-6">{cookTime}</span>
        </div>

        <div className="p-v-2">
          <span className="f-6 f-bold">Servings : </span>
          <span className="f-6">{servings}</span>
        </div>

        <div className="p-v-2">
          <span className="f-6 f-bold">Instructions:</span>
          <div className=" recipe__instructions recipe__value--indented f-6">
            {instructions}
          </div>
        </div>

        <div className="p-v-2">
          <span className="f-6 f-bold">Ingredients: </span>
          <IngredientList ingredients={ingredients} />
        </div>
      </main>
    </div>
  );
}
