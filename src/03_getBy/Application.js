import React from 'react';

function Application() {
  return (
    <>
      <h1>Heading1</h1>
      <h2>Heading2</h2>
      <div>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' placeholder='name' />
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input id='age' type='text' />
      </div>
      <button>Submit</button>
    </>
  );
}

export default Application;
