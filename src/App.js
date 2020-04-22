import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignOut from './pages/sign-in-and-sign-out/SignInAndSignOut';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
          <Route exact path="/signin">
            {this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignOut></SignInAndSignOut>
            )}
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// const mapDispatchToProps = {
//   setCurrentUser: (user) => setCurrentUser(user),
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
