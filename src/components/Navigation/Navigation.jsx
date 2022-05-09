import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  Wrapper,
  StyledMenu,
  LogoContainer,
  StyledNavigation,
  StyledLink,
  StyledGatsbyLink,
  StyledBurger,
} from './Navigation.styles';
import { StaticImage } from 'gatsby-plugin-image';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Link to='/'>
        <LogoContainer isSmall>
          <StaticImage
            src='../../assets/images/femi-vital-logo.png'
            alt='Logo. Przejdź do strony głównej'
            objectFit
          />
        </LogoContainer>
      </Link>
      <StyledBurger
        isOpen={open}
        onClick={() => setOpen(!open)}
        alt='Przycisk. Otwórz menu z nawigacją'
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu isOpen={open}>
        <Link tabIndex='0' to='/'>
          <LogoContainer>
            <StaticImage
              src='../../assets/images/femi-vital-logo.png'
              alt='Logo. Przejdź do strony głównej'
              objectFit
              loading='eager'
              placeholder='blurred'
            />
          </LogoContainer>
        </Link>
        <StyledNavigation>
          <ul>
            <li>
              <StyledGatsbyLink to='/'>Oferta</StyledGatsbyLink>
            </li>
            <li>
              <StyledGatsbyLink to='/'>Zespół</StyledGatsbyLink>
            </li>
            <li>
              <StyledGatsbyLink to='/'>Cennik</StyledGatsbyLink>
            </li>
            <li>
              <StyledGatsbyLink to='/'>Kontakt</StyledGatsbyLink>
            </li>
          </ul>
          <StyledLink href='/' target='_blank' rel='noopener noreferrer'>
            Umów online
          </StyledLink>
        </StyledNavigation>
      </StyledMenu>
    </Wrapper>
  );
};

export default Navigation;
