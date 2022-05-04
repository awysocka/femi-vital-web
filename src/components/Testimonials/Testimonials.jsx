import React from 'react';
import { PageWrapper } from '../../assets/styles/PageStyles.styles';
import { Wrapper, TestimonialsList, Quote, Caption } from './Testimonials.style';

const Testimonials = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <h2>Opinie naszych klientek</h2>
        <TestimonialsList>
          <li>
            <Quote>
              Gorąco polecam! Profesjonalna opieka, przemiła atmosfera. Dużo wsparcia oraz wiedzy.
            </Quote>
            <Caption>Gabriela</Caption>
          </li>
          <li>
            <Quote>
              Z całego serca polecam. Trafiłam do Pani Iwony 4&nbsp;lata temu z rozejściem mięśni
              prostych brzucha po ciąży. Fachowe podejście, zrozumiałe wytłumaczenie problemu i
              dokładny opis ćwiczeń.
            </Quote>
            <Caption>Patrycja</Caption>
          </li>
          <li>
            <Quote>
              Profesjonalne podejście do pacjenta, dzięki terapii manualnej, tejpowaniu i dobraniu
              indywidualnych ćwiczeń brzuch jest płaski.
            </Quote>
            <Caption>Agata</Caption>
          </li>
        </TestimonialsList>
      </PageWrapper>
    </Wrapper>
  );
};

export default Testimonials;
