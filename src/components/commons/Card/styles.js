/* eslint-disable linebreak-style */
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const CardWrapper = styled.a`
display: flex;
text-decoration:none; 
width: 250px;
border-radius: 8px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
flex-direction: column;
margin: 10px;
background-color: ${({ theme }) => theme.colors.background.main.color};
${propToStyle('width')}
${propToStyle('height')}
${propToStyle('flexDirection')}
${propToStyle('backgroundColor')}
cursor: pointer;
transition: .5s ease;

&:hover {
        transform: translate3d(0px, -4px, 0px);
        }
`;

CardWrapper.Image = styled.img`
max-width: 100%;
max-height: 100vh;
object-fit: cover;
${propToStyle('maxWidth')}
${propToStyle('borderTopLeftRadius')}
${propToStyle('borderTopRightRadius')}
`;

CardWrapper.Footer = styled.div`
width: 100%;
display: flex;
padding: 5px;
justify-content: center;
flex-direction: column;
${propToStyle('alignItems')}
`;

export default CardWrapper;
