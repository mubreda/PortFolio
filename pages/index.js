import React from 'react';
import Menu from '../src/components/commons/Menu';
import Box from '../src/components/foundation/layout/Box';
import PortfolioSection from '../src/components/sections/PortfolioSection';
import QuestionsSection from '../src/components/sections/QuestionsSection';
import HighLightSection from '../src/components/sections/HighLightSection';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="#E5E5E5"
    >
      <Menu />
      <HighLightSection />
      <QuestionsSection />
      <PortfolioSection />
    </Box>
  );
}
