import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: 40px 0;

  ${({ theme }) => theme.mq.desktop} {
    padding: 78px 0px;
  }

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: ${({ theme }) => theme.fontSize.headingSecondaryMobile};
    font-family: ${({ theme }) => theme.fontFamily.cormorant};
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.color.darkBlue};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.headingSecondary};
      margin-bottom: 60px;
    }
  }
`;

export const TeamList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 40px;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 autu;
    border-radius: ${({ theme }) => theme.radius};
    overflow: hidden;
  }

  h3 {
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-weight: 600;
    color: ${({ theme }) => theme.color.darkGrey};
    margin: 16px 0 4px;
  }

  p {
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.darkGrey};
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const StyledGatsbyLink = styled((props) => <Link {...props} />)`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  color: ${({ theme }) => theme.color.darkGrey};
  display: flex;
  align-items: center;

  svg {
    transition: all 0.3s ease-in-out;
  }

  span {
    padding: 2px 0;
    transition: all 0.3s ease;
  }

  ${({ theme }) => theme.mq.hover} {
    &:hover {
      span {
        background-color: ${({ theme }) => theme.color.hoverPink};
        border-radius: ${({ theme }) => theme.radius};
        padding: 2px 4px;
      }
      svg {
        transform: translateX(5px);
      }
    }
  }
`;

export const StyledIcon = styled(FaArrowRight)`
  color: ${({ theme }) => theme.color.lightPink};
  margin-left: 8px;
`;
