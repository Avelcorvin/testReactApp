import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Forms } from './form/Form';
import { Card } from './adapriveCards/adaprivecars';


function App() {
  return (
    <div className="App">
      <Forms/>
      <Card/>
    </div>
  );
}

export default App;
