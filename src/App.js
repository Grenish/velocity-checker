import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Body from './components/body.js';



const App = () => {
  return(
    <div className='w-full h-auto'>
      <div className='flex w-full h-auto'>
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
