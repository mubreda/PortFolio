/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import Button from '../Button';
import CardWrapper from './styles';

export function Card({
  image, url, title, info,
}) {
  return (
    <CardWrapper
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardWrapper.Image
        src={image}
        alt="imagem projeto"
        borderTopLeftRadius="8px"
        borderTopRightRadius="8px"
      />
      <CardWrapper.Footer>
        <Text
          variant="paragraph2"
          tag="p"
          color="secondary.light"
        >
          {info}
        </Text>
        <Text
          variant="subtitle"
          tag="h2"
          color="secondary.main"
        >
          {title}
        </Text>
        <Button
          ghost
          variant="primary.main"
          display="block"
          fullWidth
        >
          Discover all works
        </Button>
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
      width="600px"
      flexDirection="row"
    >
      <Grid.Col
        value={{ xs: 3, md: 3 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CardWrapper.Image
          src={image}
          alt="Imagem projeto"
          maxWidth="100%"
        />
      </Grid.Col>
      <CardWrapper.Footer
        alignItems="flex-start"
      >
        <Text
          variant="subtitle"
          tag="h2"
          color="primary.main"
        >
          {title}
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.light"
        >
          {info}
        </Text>
        <Grid.Row
          justifyContent="flex-end"
          width="100%"
          paddingTop="1px"
          paddingBottom="1px"
        >
          <Button
            variant="primary.main"
            display="block"
          >
            Discover all works
          </Button>
        </Grid.Row>
      </CardWrapper.Footer>
    </CardWrapper>
  );
}
