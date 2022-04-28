import * as React from 'react';
import styled from 'styled-components';
import logoIcon from '../../assets/images/photo-3-logo-icon.png';

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: ${({ theme }) => theme.fontSize.headingSecondaryMobile};
    font-family: ${({ theme }) => theme.fontFamily.cormorant};
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.color.darkBlue};
  }

  p {
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.darkGrey};
    line-height: 1.6;
  }
`;

const Icon = styled.img`
  width: 100%;
  max-width: 560px;
`;

const AboutUs = () => {
  return (
    <Wrapper>
      <div>
        <h2>Nasza misja </h2>
        <p>
          Zapraszamy do gabinetu zlokalizowanego na Górnym Śląsku, który specjalizuje się w
          fizjoterapii uroginekologicznej. Wychodząc naprzeciw potrzebom Kobiet pracujemy z ich
          dolegliwościami w sferze uroginekologicznej. Fizjoterapia uroginekologiczna proponuje
          terapię dysfunkcji i dolegliwości na każdym etapie życia Kobiety.
        </p>
        <p>
          Fizjoterapia uroginekologiczna to nie tylko przeciwdziałanie powstałym już dysfunkcjom, to
          także szeroko pojęta profilaktyka. Dbamy o ciało i zdrowie Kobiety, aby do dysfunkcji
          uroginekologicznych nie doszło. Proponujemy szereg działań dla poprawy świadomości ciała i
          jakości jego działania.
        </p>
      </div>
      <Icon src={logoIcon} alt='' />
    </Wrapper>
  );
};

export default AboutUs;
