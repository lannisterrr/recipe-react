import React, { useContext, useState } from 'react';
import IngredientList from './IngredientList';
import { RecipeContext } from '../App';

export default function Recipe(props) {
  const { handleDelete, handleEdit } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div className="recipe">
      <header className="recipe__header p-h-4">
        <h3 className="t-c-3 heading-3">{name}</h3>
        <div className="button-wrapper">
          <button
            onClick={() => handleEdit(id)}
            className="btn btn-accent m-h-3 t-c-1"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="btn btn-danger m-h-3 t-c-1"
          >
            Delete
          </button>
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
