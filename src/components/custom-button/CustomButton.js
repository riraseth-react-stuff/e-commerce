import React from 'react';
import { StyledButton } from './CustomButton.styles';

const CustomButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default CustomButton;
