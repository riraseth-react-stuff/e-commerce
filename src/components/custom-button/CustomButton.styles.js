import styled, { css } from 'styled-components';

const invertedButtonsStyles = css`
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: solid 1px #4285f4;
  &:hover {
    background-color: #357ae8;
  }
`;

const buttonStyles = css`
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonsStyles : buttonStyles;
};

export const StyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  ${getButtonStyles}
`;
