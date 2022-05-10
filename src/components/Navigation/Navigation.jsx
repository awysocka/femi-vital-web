import React, { useState } from 'react';
// import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
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
      <AnchorLink tabIndex='0' to='/#hero' onAnchorLinkClick={() => setOpen(false)}>
        <LogoContainer isSmall>
          <StaticImage
            src='../../assets/images/femi-vital-logo.png'
            alt='Logo. Przejdź do strony głównej'
            objectFit
          />
        </LogoContainer>
      </AnchorLink>
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
        <AnchorLink tabIndex='0' to='/#hero' onAnchorLinkClick={() => setOpen(false)}>
          <LogoContainer>
            <StaticImage
              src='../../assets/images/femi-vital-logo.png'
              alt='Logo. Przejdź do strony głównej'
              objectFit
              loading='eager'
              placeholder='blurred'
            />
          </LogoContainer>
        </AnchorLink>
        <StyledNavigation>
          <ul>
            <li>
              <StyledGatsbyLink to='/#service' onAnchorLinkClick={() => setOpen(false)}>
                Oferta
              </StyledGatsbyLink>
            </li>
            <li>
              <StyledGatsbyLink to='/#team' onAnchorLinkClick={() => setOpen(false)}>
                Zespół
              </StyledGatsbyLink>
            </li>
            <li>
              <StyledGatsbyLink to='/#prices' onAnchorLinkClick={() => setOpen(false)}>
                Cennik
              </StyledGatsbyLink>
            </li>
            <li>
              <StyledGatsbyLink to='/#contact' onAnchorLinkClick={() => setOpen(false)}>
                Kontakt
              </StyledGatsbyLink>
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
