/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import { Card, HLCard } from '../Card';

const projects = [
  {
    title: 'Info Guide',
    info: 'Unity / C# / Multiplataforma',
    img: '/images/jacto.jpg',
    url: 'https://play.google.com/store/apps/details?id=br.com.muvedigital.unifystudio.jactoinfoguide',
  },
  {
    title: 'AluraQuiz',
    info: 'React / JavaScript / Next.js',
    img: '/images/quiz.jpg',
    url: 'https://projetobreda-git-main.mubreda.vercel.app/',
  },
  {
    title: 'Staufen',
    info: 'Unity / C# / Multiplataforma',
    img: '/images/staufen.jpg',
    url: 'https://play.google.com/store/apps/details?id=digital.muve.staufen.staufenlearning',
  },
];

const highligth = [
  {
    title: 'GeekFy Store',
    info: 'Uma loja de produtos personalizados em MDF tendo como tematica o universo Geek!! XD \n Conta atualmente com proutos na area de suporte de HeadSet e de Controle, e com o nosso queridinho Porta Copas!!',
    img: '/images/geekfy.jpg',
    url: 'https://www.geekfy-store.com.br/',
  },
];

export default function CardsSection() {
  return (
    <Grid.Container
      maxWidth={{
        sm: '576px',
        md: '768px',
        lg: '1160px',
        xl: '1222px',
      }}
      marginTop={{
        xs: '32px',
        md: '75px',
      }}
    >
      <Grid.Row
        alignItems="center"
        justifyContent="center"
      >
        <Text
          variant="title"
          tag="h1"
          color="secondary.main"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          {'<PROJETOS />'}
        </Text>
      </Grid.Row>
      <Grid.Row
        alignItems="center"
        justifyContent="space-around"
        flexWrap={{
          lg: 'wrap',
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
        {highligth.map((item) => (
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
