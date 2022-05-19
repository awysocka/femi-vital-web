import * as React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero/Hero';
import DividerQuote from '../components/DividerQuote/DividerQuote';
import AboutUs from '../components/AboutUs/AboutUs';
import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import TeamSection from '../components/TeamSection/TeamSection';
import { PageWrapper } from '../assets/styles/PageStyles.styles';
import DividerContact from '../components/DividerContact/DividerContact';
import Testimonials from '../components/testimonials/Testimonials';
import PriceList from '../components/PriceList/PriceList';
import Contact from '../components/Contact/Contact';
import Faq from '../components/Faq/Faq';
import Service from '../components/Service/Service';

const IndexPage = () => {
  return (
    <>
      <Seo title='Fizjoterapia dla kobiet' />
      <Hero />
      <PageWrapper>
        <DividerQuote />
        <AboutUs />
      </PageWrapper>
      <AdvantagesSection />
      <PageWrapper>
        <Service />
      </PageWrapper>
      <TeamSection />
      <DividerContact />
      <Testimonials />
      <PageWrapper>
        <PriceList />
        <Contact />
        <Faq />
      </PageWrapper>
    </>
  );
};

export default IndexPage;
