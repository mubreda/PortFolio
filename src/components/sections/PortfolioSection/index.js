/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import Button from '../../commons/Button';

import { Card } from '../../commons/Card';

const projects = [
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/placeholder.jpg',
    url: '',
  },
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/placeholder.jpg',
    url: '',
  },
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/placeholder.jpg',
    url: '',
  },
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/placeholder.jpg',
    url: '',
  },
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/placeholder.jpg',
    url: '',
  },
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/placeholder.jpg',
    url: '',
  },
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/placeholder.jpg',
    url: '',
  },
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/placeholder.jpg',
    url: '',
  },
];

export default function PortfolioSection() {
  return (
    <Grid.Container>
      <Text
        variant="subTitle:"
        tag="h2"
        color="secondary.main"
        padding="8px"
      >
        Titulo 4
      </Text>
      <Grid.Row
        alignItems="center"
        justifyContent="space-around"
        flexWrap={{
          xs: 'nowrap',
          md: 'wrap',
        }}
      >
        {projects.map((item) => (
          <Card
            title={item.title}
            info={item.info}
            image={item.img}
            url={item.url}
          />
        ))}
      </Grid.Row>
      <Grid.Row
        justifyContent="center"
        paddingTop="1px"
        paddingBottom="1px"
      >
        <Button
          ghost
          variant="tertiary.main"
          display="block"
          border="0px"
        >
          Discover all works
        </Button>
      </Grid.Row>
    </Grid.Container>
  );
}
