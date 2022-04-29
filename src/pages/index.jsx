import * as React from 'react';
import Hero from '../components/Hero/Hero';
import DividerQuote from '../components/DividerQuote/DividerQuote';
import AboutUs from '../components/AboutUs/AboutUs';
import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import TeamSection from '../components/TeamSection/TeamSection';
import { PageWrapper } from '../assets/styles/PageStyles.styles';

const IndexPage = () => {
  return (
    <>
      <Hero />
      <PageWrapper>
        <DividerQuote />
        <AboutUs />
      </PageWrapper>
      <AdvantagesSection />
      <TeamSection />
    </>
  );
};

export default IndexPage;
