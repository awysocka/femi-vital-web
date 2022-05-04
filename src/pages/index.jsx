import * as React from 'react';
import Hero from '../components/Hero/Hero';
import DividerQuote from '../components/DividerQuote/DividerQuote';
import AboutUs from '../components/AboutUs/AboutUs';
import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import TeamSection from '../components/TeamSection/TeamSection';
import { PageWrapper } from '../assets/styles/PageStyles.styles';
import DividerContact from '../components/DividerContact/DividerContact';
import Testimonials from '../components/testimonials/Testimonials';

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
      <DividerContact />
      <Testimonials />
    </>
  );
};

export default IndexPage;
