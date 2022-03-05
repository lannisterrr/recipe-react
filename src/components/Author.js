import React from 'react';

export default function Author({ author }) {
  return (
    <div className="author-text-container">
      <p className="heading-4 t-c-3 author-text p-4">
        <span className="t-c-1">Author : </span> &nbsp; {author}
      </p>
    </div>
  );
}
