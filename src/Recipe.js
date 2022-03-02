import React from 'react';

export default function Recipe(props) {
  const { name, cookTime, servings, instructions } = props;
  return (
    <div>
      <header>
        <h3>{name}</h3>
        <div className="button-wrapper">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </header>
      <main>
        <div className="recipe__item">
          <span>Cook Time:</span>
          <span>{cookTime}</span>
        </div>

        <div className="recipe__item">
          <span>Servings : </span>
          <span>{servings}</span>
        </div>

        <div className="recipe__item">
          <span>Instructions:</span>
          <div className="recipe__instruction">{instructions}</div>
        </div>
      </main>
    </div>
  );
}
