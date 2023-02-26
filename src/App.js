import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';



const App = () => {
  return(
    <div className='w-full h-auto'>
      <div className='flex w-full h-auto'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
