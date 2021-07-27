import React from 'react';
import HomePage from '../../pages/Home/Home.page';
import NavBar from '../NavBar';

function App() {
  
  return (
    <div>
      {/** Header */}
      <header> 
        <NavBar.LightNavBar />
      </header>
      <main>
          <HomePage />
      </main>

    </div>
  );
}

export default App;
