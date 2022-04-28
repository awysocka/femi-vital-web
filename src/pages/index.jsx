import * as React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import DividerQuote from '../components/DividerQuote/DividerQuote';
import AboutUs from '../components/AboutUs/AboutUs';

const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 20px;

  ${({ theme }) => theme.mq.desktop} {
    padding: 60px;
  }
`;

const IndexPage = () => {
  return (
    <>
      <Hero />
      <PageWrapper>
        <DividerQuote />
        <AboutUs />
      </PageWrapper>
    </>
  );
};

export default IndexPage;
