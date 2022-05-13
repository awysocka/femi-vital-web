import React from 'react';
import FaqAccordion from '../Accordion/Accordion';
import { Wrapper, ContentContainer, ImageContainer } from './Faq.style';
import { StaticImage } from 'gatsby-plugin-image';

const Faq = () => {
  return (
    <Wrapper>
      <h2>Najczęściej zadawane pytania</h2>
      <ContentContainer>
        <ImageContainer>
          <StaticImage
            src='../../assets/images/photo-8-faq.jpg'
            alt='ręce kobiety trzymające model miednicy'
            objectFit
            placeholder='blurred'
          />
        </ImageContainer>

        <FaqAccordion />
      </ContentContainer>
    </Wrapper>
  );
};

export default Faq;
