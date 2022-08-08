import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const StyledAccordion = styled(Accordion)`
  border: none;

  ul {
    list-style-type: circle;
    padding-left: 20px;
    line-height: 1.6;
  }
`;

const StyledAccordionItem = styled(AccordionItem)`
  border-top: 1px solid ${({ theme }) => theme.color.blue};

  :last-child {
    border-bottom: 1px solid ${({ theme }) => theme.color.blue};
  }
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ theme }) => theme.color.darkGrey};
  padding: 20px 0;
  animation: ${fadein} 0.35s ease-in;

  p {
    margin: 0;
  }
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  cursor: pointer;
  padding: 18px 0;
  width: 100%;
  text-align: left;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    transform: rotate(0deg);
    font-size: ${({ theme }) => theme.fontSize.body};
    transition: all 0.3s ease;
  }

  &[aria-expanded='true'] svg,
  &[aria-selected='true'] svg {
    transform: rotate(-180deg);
  }

  h3 {
    margin: 0;
    width: 90%;
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: ${({ theme }) => theme.fontSize.headingTertiary};
    color: ${({ theme }) => theme.color.darkGrey};
    font-weight: 600;
    line-height: 1.4;
  }

  ${({ theme }) => theme.mq.hover} {
    :hover {
      svg {
        color: ${({ theme }) => theme.color.hoverPink};
      }
    }
  }
`;

const FaqAccordion = () => {
  return (
    <StyledAccordion allowZeroExpanded={true}>
      <StyledAccordionItem key='1'>
        <AccordionItemHeading>
          <StyledAccordionItemButton>
            <h3>Kiedy warto udać się do fizjoterapeuty uroginekologicznego?</h3>
            <FaChevronDown />
          </StyledAccordionItemButton>
        </AccordionItemHeading>
        <StyledAccordionItemPanel>
          <ul>
            <li>po porodzie, aby sprawdzić stan Twojego brzucha i dna miednicy</li>
            <li>w ciąży jeżeli chcesz zadbać o ciało i przeciwdziałać ewentualnym bólom</li>
            <li>jeżeli chcesz przygotować swoje ciało do porodu</li>
            <li>
              w przypadku problemów z nietrzymaniem moczu lub obniżeniem narządów miednicy mniejszej
            </li>
            <li>jeżeli chcesz wrócić do pełnej sprawności po porodzie</li>
            <li>
              jeżeli masz bliznę po cc lub epizjotomii i chcesz się nimi zaopiekować terapeutycznie
            </li>
            <li>jeżeli podejrzewasz rozejście mięśnia prostego brzucha</li>
            <li>po zabiegach chirurgicznych w obrębie brzucha i miednicy mniejszej</li>
            <li>jeżeli cierpisz z powodu bolesnych miesiączek czy bolesnego seksu</li>
          </ul>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
      <StyledAccordionItem key='2'>
        <AccordionItemHeading>
          <StyledAccordionItemButton>
            <h3>Co powinnaś zabrać ze sobą?</h3>
            <FaChevronDown />
          </StyledAccordionItemButton>
        </AccordionItemHeading>
        <StyledAccordionItemPanel>
          <p>
            Najlepiej zabierz ze sobą: strój sportowy, wypis ze szpitala, książeczkę ciąży, badania
            dodatkowe i inną dokumentację medyczną.
          </p>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
      <StyledAccordionItem key='3'>
        <AccordionItemHeading>
          <StyledAccordionItemButton>
            <h3>Jak wygląda pierwsza wizyta?</h3>
            <FaChevronDown />
          </StyledAccordionItemButton>
        </AccordionItemHeading>
        <StyledAccordionItemPanel>
          <p>
            Na pierwszej wizycie odbędzie się dokładny wywiad i badanie podmiotowe z wykorzystaniem
            badania USG. Z pewnością odbędzie się badanie uroginekologiczne per vaginum w celu oceny
            mięśni dna miednicy i struktur miednicy mniejszej. Odbywa się ono w pełnym komforcie dla
            Pacjentki, w atmosferze spokoju i szacunku dla jej prywatności (dostępne są
            spódniczki ginekologiczne i intymne miejsce do przebrania).
          </p>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
    </StyledAccordion>
  );
};

export default FaqAccordion;
