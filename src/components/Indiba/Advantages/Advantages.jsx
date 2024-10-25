import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, ImageContainer, IconeWrapper, StyledIcon } from './Advantages.styles';

const Advantages = () => {
    return (
        <>
            <Wrapper>
                <div>
                    <h2>Technologia marki INDIBA® S.A najlepiej sprawdzi się na:</h2>
                    <ul>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>łagodzenie objawów w przypadku bolesnych miesiączek</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>działanie przeciwzapalne i przeciwbólowe w przypadku zastojów w piersiach podczas laktacji</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>rewitalizację piersi po zakończeniu laktacji</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>zespoły bólowe kręgosłupa</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>regenerację, zwiększenie elastyczności i zmniejszenie bolesności blizn po pęknięciu/nacięciu krocza</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>przed/po zabiegach ginekologicznych w celu przyspieszenia gojenia po zabiegu lub przygotowaniu tkanek do operacji</p></li>
                    </ul>
                </div>
                <ImageContainer>
                    <StaticImage
                    src='../../../assets/images/indiba-photo-2.jpg'
                    alt=''
                    objectFit
                    placeholder='blurred'
                    />
                </ImageContainer>
            </Wrapper>
            <Wrapper>
                <ImageContainer>
                    <StaticImage
                    src='../../../assets/images/indiba-photo-3.jpg'
                    alt=''
                    objectFit
                    placeholder='blurred'
                    />
                </ImageContainer>
                <div>
                    <ul>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>redukcję zrostów oraz regenerację, zwiększenie elastyczności i poprawę estetyki blizn po CC oraz innych blizn po zabiegach chirurgicznych</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>rewitalizację brzucha po porodzie</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>wspomaganie terapii rozejścia mięśni prostych brzucha i kresy białej</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>obrzęki i zastoje limfatyczne</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>terapię i łagodzenie objawów rozejścia spojenia łonowego po porodzie</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>łagodzenie objawów endometriozy</p></li>
                    </ul>
                </div>
            </Wrapper>
            <Wrapper>
                <div>
                    <ul>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>jako wspomaganie leczenia nietrzymanie moczu</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>poprawę funkcji mięśni dna miednicy</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>zwiększenie nawilżenia w przypadku suchości pochwy</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>na bolesne współżycie lub przewlekły ból miednicy mniejszej</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>wspomagająco przy leczeniu stanów zapalnych miednicy mniejszej</p></li>
                        <li><IconeWrapper><StyledIcon /></IconeWrapper><p>rewitalizacja pochwy i sromu</p></li>
                    </ul>
                    <br />
                    <br />
                    <p>Terapia jest <b>bezpieczna, bezbolesna</b> i nie powoduje skutków ubocznych. Zabiegi <b>można wykonywać w trakcjie laktacji!</b></p>
                </div>
                <ImageContainer>
                    <StaticImage
                    src='../../../assets/images/indiba-photo-4.jpg'
                    alt=''
                    objectFit
                    placeholder='blurred'
                    />
                </ImageContainer>
            </Wrapper>
        </>
      
      );
};

export default Advantages; 