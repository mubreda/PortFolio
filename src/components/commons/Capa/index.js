/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import Button from '../Button';

export default function Capa() {
  return (
    <Grid.Container
      maxWidth="initial"
      marginTop={{
        xs: '32px',
        md: '75px',
      }}
    >
      <Grid.Row
        flexWrap={{
          xs: 'wrap',
        }}
      >
        <Grid.Col
          value={{ xs: 12, md: 5 }}
          offset={{ xs: 0, md: 1 }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems={{
            xs: 'center',
            md: 'flex-start',
          }}
        >
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Olá! Murilo Breda aqui!
          </Text>

          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Profissional formado em Sistemas de informação. Engajado e enérgico,
            que preza pelo trabalho em equipe, com 5 anos de experiencia na área,
            trabalhando, em sua maioria, com desenvolvimento em Unity na linguagem C# *.
            Buscando aprimorar habilidades no desenvolvimento front-end, assim
            como habilidades analíticas e de codificação.
          </Text>
          <Button
            variant="primary.main"
            margin={{
              xs: 'auto',
              md: 'initial',
            }}
            display="block"
          >
            Contate-me
          </Button>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
        >
          <img
            alt="Imagem murilim"
            style={{ display: 'block', margin: 'auto' }}
            src="/images/4.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
