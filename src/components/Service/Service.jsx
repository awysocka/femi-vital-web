import React from 'react';
import { MdPregnantWoman, MdWavingHand } from 'react-icons/md';
import { GiPelvisBone, GiBoltDrop } from 'react-icons/gi';
import { ImDroplet } from 'react-icons/im';
import { IconPlant2 } from '@tabler/icons-react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import {
  FaHands,
  FaHeart,
  FaHandHoldingMedical,
  FaBaby,
  FaDesktop,
  FaWalking,
} from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
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
    text-align: center;

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.headingSecondary};
      margin-bottom: 60px;
    }
  }
`;

const ServiceList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }

  li {
    border: 4px solid ${({ theme }) => theme.color.lightPink};
    border-radius: ${({ theme }) => theme.radius};
    padding: 24px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h3 {
      margin: 0;
      font-family: ${({ theme }) => theme.fontFamily.montserrat};
      color: ${({ theme }) => theme.color.darkBlue};
      font-size: ${({ theme }) => theme.fontSize.caption};
      font-weight: 600;
      line-height: 1.4;

      ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.fontSize.headingTertiary};
      }
    }

    svg {
      width: 50px;
      height: 50px;
      color: ${({ theme }) => theme.color.darkBlue};
      margin-bottom: 24px;
    }
  }
`;

const CardWrapper = styled.div`
    border: 4px solid ${({ theme }) => theme.color.lightPink};
    border-radius: ${({ theme }) => theme.radius};
    min-height: 200px;
    padding: 28px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    ${({ theme }) => theme.mq.desktop} {
        padding: 40px;
        min-height: 200px;
        margin-top: 40px;
        grid-gap: 40px;
        grid-template-columns: 1fr 2fr;
    }

    h3 {
      margin: 0;
      font-family: ${({ theme }) => theme.fontFamily.montserrat};
      color: ${({ theme }) => theme.color.darkBlue};
      font-size: ${({ theme }) => theme.fontSize.caption};
      font-weight: 600;
      line-height: 1.4;

      ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.fontSize.headingTertiary};
      }
    }

    p {
      font-family: ${({ theme }) => theme.fontFamily.montserrat};
      color: ${({ theme }) => theme.color.darkGrey};
      margin-bottom: 40px;
    }

    img {
      width: 100%;
      margin: 0 auto;
      border-radius: ${({ theme }) => theme.radius};
      overflow: hidden;
    }
`

const StyledGatsbyLink = styled((props) => <Link {...props} />)`
  min-width: 160px;
  color: ${({ theme }) => (theme.color.darkBlue)};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.body};
  background-color: ${({ theme }) => theme.color.lightPink};
  border: 1px solid
    ${({ theme }) => (theme.color.lightPink)};
  border-radius: ${({ theme }) => theme.radius};
  padding: 10px 16px;
  line-height: 1.75;
  text-align: center;
  cursor: pointer;

  ${({ theme }) => theme.mq.hover} {
    &:hover {
      background-color: ${({ theme }) => theme.color.hoverPink};
      border: 1px solid
        ${({ theme }) => (theme.color.hoverPink)};
    }
  }

`;

const Service = () => {
  return (
    <Wrapper id='oferta'>
      <h2>W czym możemy Ci pomóc?</h2>
      <ServiceList>
        <li>
          <FaBaby />
          <h3>Fizjoterapia w czasie ciąży i&nbsp;po&nbsp;porodzie</h3>
        </li>
        <li>
          <MdPregnantWoman />
          <h3>Przygotowanie do porodu naturalnego i cięcia cesarskiego</h3>
        </li>
        <li>
          <GiPelvisBone />
          <h3>Obniżenie narządów miednicy mniejszej</h3>
        </li>
        <li>
          <MdWavingHand />
          <h3>Mobilizacja blizn (po&nbsp;epizjotomii i&nbsp;cięciu cesarskim)</h3>
        </li>
        <li>
          <FaHands />
          <h3>
            DRA <br />
            rozejście kresy białej
          </h3>
        </li>
        <li>
          <FaHandHoldingMedical />
          <h3>Fizjoterapia po operacjach uroginekologicznych</h3>
        </li>
        <li>
          <FaHeart />
          <h3>Problemy bólowe, ból podczas współżycia</h3>
        </li>
        <li>
          <FaDesktop />
          <h3>Badanie USG powłok brzusznych</h3>
        </li>
        <li>
          <FaWalking />
          <h3>Bóle kręgosłupa i stawów obwodowych</h3>
        </li>
        <li>
          <IconPlant2 />
          <h3>Rewitalizacja pochwy<br/>i sromu</h3>
        </li>
        <li>
          <ImDroplet />
          <h3>Wszystkie formy nietrzymania moczu</h3>
        </li>
        <li>
          <GiBoltDrop />
          <h3>Pęcherz nadaktywny</h3>
        </li>
      </ServiceList>
      <CardWrapper>
        <StaticImage
            src='../../assets/images/indiba-service.jpg'
            alt=''
            objectFit
            placeholder='blurred'
          />
        <div>
          <h3>Technologia marki INDIBA® S.A</h3>
          <p>
            Urządzenie marki INDIBA® S.A intensywnie stymuluje i regeneruje tkanki przyspieszając ich gojenie. Wykorzystuje jedyny na świecie, opatentowany system Proionic®, który poprawia krążenie płynów międzytkankowych i wymianę międzykomórkową.
            Ta nowoczesna metoda wspiera leczenie między innymi stanów zapalnych miednicy mniejszej, rozejścia mięśni prostych brzucha i kresy białej. Doskonale sprawdza się również przy łagodzeniu objawów w przypadku bolesnych miesiączek oraz endometriozy.
          </p>
          <StyledGatsbyLink to='/indiba'>
            Dowiedz się więcej
          </StyledGatsbyLink>
        </div>
      </CardWrapper>
    </Wrapper>
  );
};

export default Service;
