/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React from 'react';
import { Text } from '../../foundation/Text';
import CardWrapper from './styles';

export function Card({
  image, title, info, url,
}) {
  return (
    <CardWrapper
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      width={{
        xs: '450px',
        xl: '300px',
      }}
    >
      <CardWrapper.Image
        src={image}
        alt="imagem projeto"
      />
      <CardWrapper.Footer>
        <Text
          variant="subtitle"
          tag="h2"
          color="tertiary.main"
        >
          {title}
        </Text>
        <Text
          variant="paragraph2"
          tag="p"
          color="tertiary.light"
        >
          {info}
        </Text>
      </CardWrapper.Footer>
    </CardWrapper>
  );
}

export function HLCard({
  image, title, info, url,
}) {
  return (
    <CardWrapper
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      width="900px"
      flexDirection="row"
    >
      <CardWrapper.Image
        src={image}
        alt="Imagem projeto"
        maxWidth="60%"
      />
      <CardWrapper.Footer
        alignItems="flex-start"
      >
        <Text
          variant="subtitle"
          tag="h2"
          color="tertiary.main"
        >
          {title}
        </Text>
        <Text
          variant="paragraph2"
          tag="p"
          color="tertiary.light"
        >
          {info}
        </Text>
      </CardWrapper.Footer>
    </CardWrapper>
  );
}
