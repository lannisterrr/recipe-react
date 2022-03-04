import React from 'react';

export default function Alert() {
  return (
    <div class="alert alert-success p-h-2 round-corner box-shadow-light alert-position">
      <span>
        <i class="fas fa-check alert-icon f-8 t-c-1"></i>
      </span>
      <p class="p-h-4 f-8 t-c-1">Recipe Deleted!!!</p>
    </div>
  );
}
