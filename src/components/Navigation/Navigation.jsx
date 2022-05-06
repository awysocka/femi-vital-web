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
      <Link tabIndex='0' to='/'>
        <Logo isSmall src={logo} alt='Logo. Przejdź do strony głównej' />
      </Link>
      <StyledBurger isOpen={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu isOpen={open}>
        <Link tabIndex='0' to='/'>
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
