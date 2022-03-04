import React from 'react';

export default function Alert() {
  return (
    <div className="alert alert-success p-h-2 round-corner box-shadow-light alert-position">
      <span>
        <i className="fas fa-check alert-icon f-8 t-c-1"></i>
      </span>
      <p className="p-h-4 f-8 t-c-1">Recipe Deleted!!!</p>
    </div>
  );
}
