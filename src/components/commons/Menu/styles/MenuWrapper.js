/* eslint-disable linebreak-style */

import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';
import propToStyle from '../../../../theme/utils/propToStyle';

const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.background.main.color};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  ${breakpointsMedia({
    md: css`
      padding-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 12px 16px;
      // max-width: 768px;
    `,
    lg: css`
     // max-width: 1160px; 
    `,
    xl: css`
      // max-width: 1222px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  display: flex;
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.light.color};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.light.color};
  padding: 12px;
  
  ${breakpointsMedia({
    md: css`
      max-width: 40rem;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      margin-left: 2rem;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
  ${propToStyle('paddingTop')}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.light.color};
    transition: ${({ theme }) => theme.transition};
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}
    &:hover,
    &:focus {
      transform: translate3d(0, 2px, 0);
      color: ${({ theme }) => theme.colors.secondary.main.color};
      
    }
  }
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;

export default MenuWrapper;
