/* eslint-disable linebreak-style */
import React from 'react';
import MenuWrapper from './styles/MenuWrapper';
import Button from '../Button';

export default function Menu() {
  return (
    <MenuWrapper>
      <Button
        ghost
        variant="secondary.main"
        margin="0"
        display="block"
      >
        Fale Conosco
      </Button>
    </MenuWrapper>
  );
}
