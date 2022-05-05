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
  padding-bottom: 20px;
  animation: ${fadein} 0.35s ease-in;

  p {
    margin: 0;
  }
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.headingTertiary};
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: 600;
  line-height: 1.4;
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
  }

  &[aria-expanded='true'] svg,
  &[aria-selected='true'] svg {
    transform: rotate(-180deg);
  }

  p {
    margin: 0;
    width: 90%;
  }
`;

const FaqAccordion = () => {
  return (
    <StyledAccordion allowZeroExpanded={true}>
      <StyledAccordionItem key='1'>
        <AccordionItemHeading>
          <StyledAccordionItemButton>
            <p>Kiedy powinnaś udać się na wizytę do fizjoterapeuty uroginekologicznego?</p>
            <FaChevronDown />
          </StyledAccordionItemButton>
        </AccordionItemHeading>
        <StyledAccordionItemPanel>
          <p>
            <ul>
              <li>
                Profilaktycznie - warto sprawdzić, czy wszystko jest ok i dowiedzieć się, co robić,
                aby taki stan rzeczy trwał jak najdłużej
              </li>
              <li>Jeśli planujesz ciążę, jesteś w ciąży (po skończonym I trymestrze)</li>
              <li>
                Już urodziłaś (po porodzie możesz się spokojnie umówić po wizycie połogowej u
                ginekologa, jeśli jednak zauważasz jakieś niepokojące objawy, zrób to jak
                najszybciej)
              </li>
              <li>
                Jeśli Twoja ciąża zakończyła się CC i wizyta będzie dotyczyć blizny, zaczekaj, aż
                szwy będą wyciągnięte, nie będzie strupków itd.
              </li>
              <li>Jeśli borykasz się z jakimiś dolegliwościami w obrębie dna miednicy</li>
              <li>Jeśli wchodzisz w okres menopauzy</li>
            </ul>
          </p>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
      <StyledAccordionItem key='2'>
        <AccordionItemHeading>
          <StyledAccordionItemButton>
            <p>Co powinnam zabrać ze sobą?</p>
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
    </StyledAccordion>
  );
};

export default FaqAccordion;
