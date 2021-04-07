/* eslint-disable linebreak-style */
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const CardWrapper = styled.a`
display: flex;
text-decoration:none; 
width: 300px;
max-height: 100vh;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
flex-direction: column;
margin: 10px;
background: linear-gradient(360deg, rgba(77, 82, 88, 0) -43%, #4D5258 29.99%);
${propToStyle('width')}
${propToStyle('flexDirection')}
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
`;

CardWrapper.Footer = styled.div`
display: flex;
padding: 10px;
align-items: center;
flex-direction: column;
${propToStyle('alignItems')}
`;

// CardWrapper.Title = styled.h2``;

// CardWrapper.Text = styled.p``;

export default CardWrapper;
