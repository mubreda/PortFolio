/* eslint-disable linebreak-style */

import styled from 'styled-components';

const SocialBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

SocialBar.StyleIcon = styled.a`
        margin-left: 16px;
        width: 32px;
        cursor: pointer;

        path, circle{
            transition: .7s ease;
        }

        &:hover{
            path, circle{
                fill: #62F0BD;
                transform: translate3d(0, 2px, 0);
            }
        }
`;

export default SocialBar;
