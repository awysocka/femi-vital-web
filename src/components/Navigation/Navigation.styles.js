import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
`;

export const StyledMenu = styled.div`
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
`;

export const Logo = styled.img`
  width: ${(props) => (props.isSmall ? '120px' : '176px')};
  margin-bottom: auto;
`;

export const StyledNavigation = styled.nav`
  ul {
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-weight: 400;
    line-height: 1.2;

    li {
      margin: 30px 0;

      a {
        color: ${({ theme }) => theme.color.darkGrey};
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.mobileNav};
      }
    }
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.darkBlue};
  background-color: ${({ theme }) => theme.color.lightPink};
  border: 1px solid ${({ theme }) => theme.color.lightPink};
  border-radius: ${({ theme }) => theme.radius};
  padding: 6px 16px;
  line-height: 1.75;
  cursor: pointer;
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

  &:focus {
    outline: ${({ theme }) => theme.outline};
  }

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
`;
