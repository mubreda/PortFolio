/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { HLCard } from '../../commons/Card';

const projects = [
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/icon.svg',
    url: '',
  },
  {
    title: 'Titulo...',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, tellus a lobortis congue,',
    img: '/images/icon.svg',
    url: '',
  },
];

export default function HighLightSection() {
  return (
    <Grid.Container>
      <Grid.Row
        alignItems="center"
        justifyContent="space-around"
        flexWrap="nowrap"
      >
        {projects.map((item) => (
          <HLCard
            title={item.title}
            info={item.info}
            image={item.img}
            url={item.url}
          />
        ))}
      </Grid.Row>
    </Grid.Container>
  );
}
