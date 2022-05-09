import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.lightBlue};

  ${({ theme }) => theme.mq.desktop} {
    padding: 20px 60px;
  }
`;

export const StyledMenu = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: 50px;
  position: absolute;
  top: 0;
  right: -110%;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-110%)' : 'translateX(0%)')};
  transition: transform 0.3s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;
    right: 0%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    height: unset;
    background-color: transparent;
    position: static;
  }
`;

export const LogoContainer = styled.div`
  width: ${(props) => (props.isSmall ? '120px' : '176px')};
  margin-bottom: auto;

  ${({ theme }) => theme.mq.desktop} {
    display: ${(props) => (props.isSmall ? 'none' : 'flex')};
  }
`;

export const StyledNavigation = styled.nav`
  ul {
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-weight: 400;
    line-height: 1.2;

    ${({ theme }) => theme.mq.desktop} {
      display: flex;
      align-items: center;
    }

    li {
      margin: 30px 0;

      ${({ theme }) => theme.mq.desktop} {
        margin: 0;
        margin-left: 30px;
      }

      a {
        color: ${({ theme }) => theme.color.darkGrey};
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.mobileNav};

        ${({ theme }) => theme.mq.desktop} {
          font-size: ${({ theme }) => theme.fontSize.body};
        }
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.darkBlue};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.mobileNav};
  background-color: ${({ theme }) => theme.color.lightPink};
  border: 1px solid ${({ theme }) => theme.color.lightPink};
  border-radius: ${({ theme }) => theme.radius};
  padding: 6px 16px;
  line-height: 1.75;
  cursor: pointer;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.body};
    margin-left: 80px;
  }

  ${({ theme }) => theme.mq.hover} {
    &:hover {
      background-color: ${({ theme }) => theme.color.hoverPink};
      border: 1px solid ${({ theme }) => theme.color.hoverPink};
    }
  }
`;

export const StyledGatsbyLink = styled((props) => <Link {...props} />)`
  padding: 2px 4px;
  transition: all 0.3s ease;

  ${({ theme }) => theme.mq.hover} {
    &:hover {
      background-color: ${({ theme }) => theme.color.hoverPink};
      border-radius: ${({ theme }) => theme.radius};
    }
  }
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  div {
    width: 36px;
    height: 3px;
    background: ${({ theme }) => theme.color.darkBlue};
    border-radius: ${({ theme }) => theme.radius};
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;
