import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, ImageContainer } from './AboutUs.style';

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
      <ImageContainer>
        <StaticImage
          src='../../assets/images/photo-3-logo-icon.png'
          alt=''
          objectFit
          placeholder='blurred'
        />
      </ImageContainer>
    </Wrapper>
  );
};

export default AboutUs;
