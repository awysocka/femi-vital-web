import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, ImageContainer } from './AboutUs.style';

const AboutUs = () => {
  return (
    <Wrapper>
      <div>
        <h2>Nasza misja </h2>
        <p>
          Zapraszamy do gabinetu zlokalizowanego na Górnym&nbsp;Śląsku, który specjalizuje się w
          fizjoterapii kobiecej. Na co dzień współpracujemy z Kobietami z&nbsp;problemami w sferze
          urologinekologicznej.
        </p>
        <p>
          Wychodząc naprzeciw potrzebom Kobiet zapraszamy w&nbsp;czasie ciąży. Celem wizyt jest
          utrzymanie ciała w&nbsp;dobrej formie, przeciwdziałanie dolegliwościom bólowym, a także
          przygotowanie do porodu naturalnego czy cesarskiego cięcia. Nasza uwaga jest również
          skoncentrowana na Kobiety po porodzie, szanując fizjologię połogu i regenerację celem
          dojścia do pełnej sprawności
        </p>
        <p>
          Fizjoterapia uroginekologiczna to nie tylko przeciwdziałanie powstałym już dysfunkcjom, to
          także szeroko pojęta profilatyka. Dbamy o ciało i zdrowie Kobiety, proponując szereg
          działań dla poprawy świadomości ciała i jakości jego działania.
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
