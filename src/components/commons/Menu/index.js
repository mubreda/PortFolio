/* eslint-disable linebreak-style */

import React from 'react';
import HeaderWrapper from './styles/MenuWrapper';
import { Text } from '../../foundation/Text';
import SocialBar from '../NavSocials/styles';
import Instagram from '../../../theme/Icons/instagram';
import Linkedin from '../../../theme/Icons/linkedin';
import GitHub from '../../../theme/Icons/github';

export default function Menu() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.NavMenu as="ul">
        {' '}
        {/* HeaderWrapper.NavMenu */}
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Projetos' },
          { url: '/sobre', name: 'Sobre' },
        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </HeaderWrapper.NavMenu>
      <HeaderWrapper.RightSide>
        {' '}
        {/* HeaderWrapper.RightSide */}
        <SocialBar.StyleIcon href="https://www.instagram.com/mubreda/" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </SocialBar.StyleIcon>
        <SocialBar.StyleIcon href="https://www.linkedin.com/in/mubreda/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </SocialBar.StyleIcon>
        <SocialBar.StyleIcon href="https://github.com/mubreda" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </SocialBar.StyleIcon>
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
