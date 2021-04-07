/* eslint-disable linebreak-style */

import styled, { css } from 'styled-components';
import get from 'lodash/get';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import { TextStyleVariants } from '../../foundation/Text';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}

  ${propToStyle('margin')}
  ${propToStyle('display')}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  &::after{
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0px;
        
        background: ${({ theme }) => theme.colors.borders.main.color};
        border-radius:  ${({ theme }) => theme.borderRadius};

        width: 0%;
        height: 100%;
        z-index: -1;

        transition: .7s ease;
    }


    &:hover{

        transform: scale(1.05);

        &:after{
            opacity: 1;
            width: 100%;
        }
    }
`;

export default Button;
