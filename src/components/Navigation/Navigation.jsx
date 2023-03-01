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
      <AnchorLink tabIndex='0' to='/#strona-glowna' onAnchorLinkClick={() => setOpen(false)}>
        <LogoContainer isSmall>
          <StaticImage
            src='../../assets/images/femi-vital-logo.png'
            // src='../../assets/images/femivital-logo.svg'
            alt='Logo. Przejdź do strony głównej'
            objectFit
            placeholder='blurred'
            loading='eager'
          />
        </LogoContainer>
      </AnchorLink>
      <StyledBurger
        isOpen={open}
        onClick={() => setOpen(!open)}
        alt='Przycisk. Otwórz menu z nawigacją'
        aria-label='Otwórz menu z nawigacją'
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu isOpen={open}>
        <AnchorLink tabIndex='0' to='/#strona-glowna' onAnchorLinkClick={() => setOpen(false)}>
          <LogoContainer>
            <StaticImage
              // src='../../assets/images/femi-vital-logo.png'
              src='../../assets/images/femivital-logo.svg'
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
              <StyledGatsbyLink to='/#oferta' onAnchorLinkClick={() => setOpen(false)}>
                Oferta
              </StyledGatsbyLink>
            </li>
            <li>
              <StyledGatsbyLink to='/#zespol' onAnchorLinkClick={() => setOpen(false)}>
                Zespół
              </StyledGatsbyLink>
            </li>
            <li>
              <StyledGatsbyLink to='/#cennik' onAnchorLinkClick={() => setOpen(false)}>
                Cennik
              </StyledGatsbyLink>
            </li>
            <li>
              <StyledGatsbyLink to='/#kontakt' onAnchorLinkClick={() => setOpen(false)}>
                Kontakt
              </StyledGatsbyLink>
            </li>
          </ul>
          <StyledLink
            href='https://zarejestrowani.pl/p/QYlK8XPlFXpC0rCryOb93A/?fbclid=IwAR0UTNC85gvBDCbYtuOSBpQf8L70GVr0Zb_lAGz1hZQl4O_-0eNqXLDskDk'
            target='_blank'
            rel='noopener noreferrer'
          >
            Umów online
          </StyledLink>
        </StyledNavigation>
      </StyledMenu>
    </Wrapper>
  );
};

export default Navigation;
