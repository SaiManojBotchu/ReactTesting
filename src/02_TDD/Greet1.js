import React from 'react';

function Greet1({ name }) {
  return (
    <div>
      <p>{name ? `Hello ${name}` : 'Hello'}</p>
    </div>
  );
}

export default Greet1;
