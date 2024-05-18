import React from 'react';

function Skills({ skills }) {
  return (
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skills}</li>
      ))}
    </ul>
  );
}

export default Skills;
