import React from 'react';
import logo from '../../assets/images/femi-vital-logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Wrapper, RoundBackground, Logo, SocialMediaContainer, Content } from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={logo} alt='Logo.' />
        <SocialMediaContainer>
          <a
            href='https://www.facebook.com/Femi-Vital-Fizjoterapia-Uroginekologiczna-105892008325599'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.instagram.com/femi.vital.fizjo.urogin/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        </SocialMediaContainer>
        <p>Copyright 2021 © Femi-Vital</p>
        <p>
          Wykonanie{' '}
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
