import React from 'react';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';

import Capa from '../src/components/commons/Capa';
import CardsSection from '../src/components/commons/CardsSection';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Grid.Container
        backgroundImage="url(/images/back.jpg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Menu />
        <Capa />
      </Grid.Container>
      <CardsSection />
      <Footer />
    </Box>
  );
}
