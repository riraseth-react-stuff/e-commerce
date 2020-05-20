import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import {css} from 'styled-components'

// const OptionContainerStyles = css`
//   margin: 10px 15px;
//   cursor: pointer;
// `;

export const StyledHeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const StyledLogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const StyledOptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledOptionLink = styled(Link)`
  margin: 10px 15px;
  cursor: pointer;
`;

// export const StyledOptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
