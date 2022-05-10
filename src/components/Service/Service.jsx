import React from 'react';
import { MdPregnantWoman, MdWavingHand } from 'react-icons/md';
import { GiPelvisBone } from 'react-icons/gi';
import { FaHands, FaVenusMars, FaHandHoldingMedical } from 'react-icons/fa';
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
    justify-content: space-between;

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
      margin-bottom: 20px;
    }
  }
`;

const Service = () => {
  return (
    <Wrapper id="service">
      <h2>W czym możemy Ci pomóc?</h2>
      <ServiceList>
        <li>
          <MdPregnantWoman />
          <h3>Fizjoterapia w czasie ciąży i&nbsp;po&nbsp;porodzie</h3>
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
          <FaVenusMars />
          <h3>Problemy bólowe, ból podczas współżycia</h3>
        </li>
      </ServiceList>
    </Wrapper>
  );
};

export default Service;
