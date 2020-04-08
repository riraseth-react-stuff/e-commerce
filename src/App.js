import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
function App() {
  return (
    <div>
      <Route exact path="/">
        <Homepage></Homepage>
      </Route>
    </div>
  );
}

export default App;
