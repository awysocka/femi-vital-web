import React from 'react';
import styled from 'styled-components';
import heroImg from '../../assets/images/photo-1-hero.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const RoundBackground = styled.div`
  position: relative;
  min-height: 500px;
  width: 100%;
  height: 65vh;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.lightBlue};
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    transform: scaleX(2.5);
    z-index: -1;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 100px;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-family: ${({ theme }) => theme.fontFamily.cormorant};
    color: ${({ theme }) => theme.color.darkBlue};
    font-weight: 500;
    font-style: italic;
    line-height: 1;
    font-size: ${({ theme }) => theme.fontSize.headingPrimaryMobile};
    margin: 0;
    margin-bottom: 30px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.body};
    color: ${({ theme }) => theme.color.darkGrey};
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    max-width: 470px;
    line-height: 1.6;
    margin: 0;
    margin-bottom: 41px;
  }
`;

const HeroImage = styled.img`
  width: 96%;
`;

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
