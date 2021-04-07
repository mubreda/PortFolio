/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import Grid from '../../foundation/layout/Grid';
import TextField from '../../commons/TextField';
import { Text } from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';

const Select = styled.select`
width: 100%;
border: 1px solid ${({ theme }) => theme.colors.secondary.light.color};
padding: 12px 16px;
outline: 0;
border-radius: 8px;
margin-bottom: 17px;
`;

const Back = styled.div`
background-color: ${({ theme }) => theme.colors.background.main.color};
border-radius: 8px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
${propToStyle('maxWidth')}
`;

export default function Questions() {
  return (
    <Grid.Container>
      <Back
        maxWidth={{
          xs: '50%',
          md: '100%',
        }}
      >
        <Text
          variant="subTitle"
          tag="h2"
          color="primary.main"
          padding="8px"
        >
          Titulo 3
        </Text>
        <Grid.Row
          alignItems="center"
          justifyContent="space-around"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <div>
            <Text
              variant="paragraph1"
              tag="label"
              color="secondary.main"
            >
              Pergunta 1?
            </Text>
            <TextField
              type="text"
              placeholder="Digite a resposta"
              name="nome"
            />
          </div>
          <div>
            <Text
              variant="paragraph1"
              tag="label"
              color="secondary.main"
            >
              Pergunta 2?
            </Text>
            <TextField
              type="text"
              name="dataNascimento"
              placeholder="Digite a resposta"
            />
          </div>
          <div>
            <Text
              variant="paragraph1"
              tag="label"
              color="secondary.main"
            >
              Pergunta 3?
            </Text>
            <Select>
              <option value="" disabled selected>Selecione</option>
            </Select>
          </div>
        </Grid.Row>
      </Back>
    </Grid.Container>
  );
}
