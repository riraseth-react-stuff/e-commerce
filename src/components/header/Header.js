import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  StyledHeaderContainer,
  StyledLogoContainer,
  StyledOptionLink,
  StyledOptionsContainer,
} from './Header.styles';

const Header = ({ currentUser, hidden }) => {
  return (
    <StyledHeaderContainer>
      <StyledLogoContainer to="/">
        <Logo className="logo"></Logo>
      </StyledLogoContainer>
      <StyledOptionsContainer>
        <StyledOptionLink to="/shop">SHOP</StyledOptionLink>
        <StyledOptionLink to="/contact">CONTACT</StyledOptionLink>
        {currentUser ? (
          <StyledOptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </StyledOptionLink>
        ) : (
          <StyledOptionLink to="/signin">SIGN IN</StyledOptionLink>
        )}
        <CartIcon></CartIcon>
      </StyledOptionsContainer>
      {hidden ? null : <CartDropdown></CartDropdown>}
    </StyledHeaderContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
