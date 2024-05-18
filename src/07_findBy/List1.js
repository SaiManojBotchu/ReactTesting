import { useState } from 'react';

function List1({ skills }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useState(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  });
  return (
    <>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
}

export default List1;
