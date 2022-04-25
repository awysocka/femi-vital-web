import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/images/femi-vital-logo.png';
import {
  Wrapper,
  StyledMenu,
  Logo,
  StyledNavigation,
  StyledLink,
  StyledBurger,
} from './Navigation.styles';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Link tabindex='0'>
        <Logo isSmall src={logo} alt='Logo. Przejdź do strony głównej' />
      </Link>
      <StyledBurger isOpen={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu isOpen={open}>
        <Link tabindex='0'>
          <Logo src={logo} alt='Logo. Przejdź do strony głównej' />
        </Link>
        <StyledNavigation>
          <ul>
            <li>
              <Link to='/'>Oferta</Link>
            </li>
            <li>
              <Link to='/'>Zespół</Link>
            </li>
            <li>
              <Link to='/'>Cennik</Link>
            </li>
            <li>
              <Link to='/'>Kontakt</Link>
            </li>
            <li>
              <StyledLink href='/'>Umów online</StyledLink>
            </li>
          </ul>
        </StyledNavigation>
      </StyledMenu>
    </Wrapper>
  );
};

export default Navigation;
