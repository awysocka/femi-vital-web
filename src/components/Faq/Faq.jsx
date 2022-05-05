import React from 'react';
import faqPhoto from '../../assets/images/photo-8-faq.jpg';
import FaqAccordion from '../Accordion/Accordion';
import { Wrapper, ContentContainer } from './Faq.style';

const Faq = () => {
  return (
    <Wrapper>
      <h2>Najczęściej zadawane pytania</h2>
      <ContentContainer>
        <img src={faqPhoto} alt=''></img>
        <FaqAccordion />
      </ContentContainer>
    </Wrapper>
  );
};

export default Faq;
