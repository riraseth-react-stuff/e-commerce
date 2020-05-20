import React from 'react';
import { StyledHomePageContainer } from './HomePage.styles';
import Directory from '../../components/directory/Directory';
const Homepage = () => {
  return (
    <StyledHomePageContainer>
      <Directory></Directory>
    </StyledHomePageContainer>
  );
};

export default Homepage;
