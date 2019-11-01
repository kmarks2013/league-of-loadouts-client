import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import FormConatiner from './containers/FormConatiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FormConatiner />
    </div>
  );
}

export default App;
