import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignOut from './pages/sign-in-and-sign-out/SignInAndSignOut';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/shop">
          <ShopPage></ShopPage>
        </Route>
        <Route path="/signin">
          <SignInAndSignOut></SignInAndSignOut>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
