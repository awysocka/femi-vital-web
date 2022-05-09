import React from 'react';
import { Wrapper, RoundBackground, Content, HeroImageContainer } from './Hero.styles';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Twoje dobre samopoczucie jest naszym priorytetem.</h1>
        <p>
          Zapraszamy do Femi-Vital Fizjoterapia Uroginekologiczna. Z troską zadbamy o Twoje ciało i
          zdrowie.
        </p>
        <HeroImageContainer>
          <StaticImage
            src='../../assets/images/photo-1-hero.jpg'
            alt='zdjęcie czterech kobiet siedzących na pododze ogądających model kobiecej miednicy'
            objectFit
            loading='eager'
            placeholder='blurred'
          />
        </HeroImageContainer>
      </Content>
      <RoundBackground />
    </Wrapper>
  );
};

export default Hero;
