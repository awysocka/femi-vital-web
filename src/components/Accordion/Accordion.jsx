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
            <h3>Kiedy powinna?? uda?? si?? na wizyt?? do fizjoterapeuty uroginekologicznego?</h3>
            <FaChevronDown />
          </StyledAccordionItemButton>
        </AccordionItemHeading>
        <StyledAccordionItemPanel>
          <ul>
            <li>
              Profilaktycznie - warto sprawdzi??, czy wszystko jest ok i dowiedzie?? si??, co robi??,
              aby taki stan rzeczy trwa?? jak najd??u??ej
            </li>
            <li>Je??li planujesz ci??????, jeste?? w ci????y (po sko??czonym I trymestrze)</li>
            <li>
              Ju?? urodzi??a?? (po porodzie mo??esz si?? spokojnie um??wi?? po wizycie po??ogowej u
              ginekologa, je??li jednak zauwa??asz jakie?? niepokoj??ce objawy, zr??b to jak najszybciej)
            </li>
            <li>
              Je??li Twoja ci????a zako??czy??a si?? CC i wizyta b??dzie dotyczy?? blizny, zaczekaj, a?? szwy
              b??d?? wyci??gni??te, nie b??dzie strupk??w itd.
            </li>
            <li>Je??li borykasz si?? z jakimi?? dolegliwo??ciami w obr??bie dna miednicy</li>
            <li>Je??li wchodzisz w okres menopauzy</li>
          </ul>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
      <StyledAccordionItem key='2'>
        <AccordionItemHeading>
          <StyledAccordionItemButton>
            <h3>Co powinnam zabra?? ze sob???</h3>
            <FaChevronDown />
          </StyledAccordionItemButton>
        </AccordionItemHeading>
        <StyledAccordionItemPanel>
          <p>
            Najlepiej zabierz ze sob??: str??j sportowy, wypis ze szpitala, ksi????eczk?? ci????y, badania
            dodatkowe i inn?? dokumentacj?? medyczn??.
          </p>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
    </StyledAccordion>
  );
};

export default FaqAccordion;
