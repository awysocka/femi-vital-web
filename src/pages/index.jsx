import * as React from 'react';
import Hero from '../components/Hero/Hero';
import DividerQuote from '../components/DividerQuote/DividerQuote';
import AboutUs from '../components/AboutUs/AboutUs';
import AdventagesSection from '../components/AdventagesSection/AdventagesSection';
import { PageWrapper } from '../assets/styles/PageStyles.styles';

const IndexPage = () => {
  return (
    <>
      <Hero />
      <PageWrapper>
        <DividerQuote />
        <AboutUs />
      </PageWrapper>
      <AdventagesSection />
    </>
  );
};

export default IndexPage;
