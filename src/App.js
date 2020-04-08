import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/shop">
          <ShopPage></ShopPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
