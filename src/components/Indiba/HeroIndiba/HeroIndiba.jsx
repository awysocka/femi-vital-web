import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Content, ImageContainer, TextWrapper } from './HeroIndiba.styles'

const HeroIndiba = () => {
    return (
        <Content>
            <ImageContainer>
                <StaticImage
                    src='../../../assets/images/indiba-photo-1.jpg'
                    alt=''
                    objectFit
                    placeholder='blurred'
                    />
            </ImageContainer>
            <TextWrapper>
                <p>
                Skuteczność działania poparta badaniami klinicznymi!
                </p>
                <h1>Technologia marki INDIBA® S.A</h1>
            </TextWrapper>


        </Content>
    )
}

export default HeroIndiba; 