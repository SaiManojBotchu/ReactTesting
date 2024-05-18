import React from 'react';
// import Application from './03_getBy/Application';
// import List from './06_queryBy/List';
// import Counter from './08_user-event/Counter';
import Parent from './09_providers/Parent';
import ThemeProvider from './useThemeProvider';

function App() {
  return (
    <div>
      {/* <Application /> */}

      {/* <List skills={['HTML', 'CSS']} /> */}

      {/* <Counter /> */}

      <ThemeProvider>
        <Parent />
      </ThemeProvider>
    </div>
  );
}

export default App;
