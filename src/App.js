import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Counters from './components/counters';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Counters />
    </React.Fragment>
  );
}

export default App;
