import React from 'react';
import heroImg from '../../assets/images/photo-1-hero.jpg';
import { Wrapper, RoundBackground, Content, HeroImage } from './Hero.styles';

const Hero = () => {
  return (
    <Wrapper>
      <RoundBackground />
      <Content>
        <h1>Twoje dobre samopoczucie jest naszym priorytetem.</h1>
        <p>
          Zapraszamy do Femi-Vital Fizjoterapia Uroginekologiczna. Z troską zadbamy o Twoje ciało i
          zdrowie.
        </p>
        <HeroImage src={heroImg} alt='' />
      </Content>
    </Wrapper>
  );
};

export default Hero;
