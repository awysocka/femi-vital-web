import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {
  Wrapper,
  RoundBackground,
  LogoContainer,
  SocialMediaContainer,
  Content,
} from './Footer.style';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <LogoContainer>
          <StaticImage
            // src='../../assets/images/femi-vital-logo.png'
            src='../../assets/images/femivital-logo.svg'
            alt='Logo firmy'
            objectFit
            placeholder='blurred'
          />
        </LogoContainer>
        <SocialMediaContainer>
          <a
            href='https://www.facebook.com/profile.php?id=100067599881010'
            target='_blank'
            rel='noopener noreferrer'
            alt='Ikona facebooka. Przejdź na fanpage firmy na facebooku'
            aria-label='Przejdź na fanpage firmy na facebooku'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.instagram.com/femi_vital_fizjo_kobieca/'
            target='_blank'
            rel='noopener noreferrer'
            alt='Ikona instagrama. Przejdź na konto firmy na instagramie'
            aria-label='Przejdź na konto firmy na instagramie'
          >
            <FaInstagram />
          </a>
        </SocialMediaContainer>
        <p>Copyright 2022 © Femi-Vital</p>
        <p>
          Wykonanie
          <a href='https://annawysocka.pl/' target='_blank' rel='noopener noreferrer'>
            Anna Wysocka
          </a>
        </p>
      </Content>
      <RoundBackground />
    </Wrapper>
  );
};

export default Footer;
