import React from 'react';
import HeroIndiba from '../components/Indiba/HeroIndiba/HeroIndiba'
import Advantages from '../components/Indiba/Advantages/Advantages'
import About from '../components/Indiba/About/About'
import PricesInfo from '../components/Indiba/PricesInfo/PricesInfo'
import { PageWrapper } from '../assets/styles/PageStyles.styles';


const IndibaPage = () => {
    return (
        <>
            <HeroIndiba />
            <PageWrapper>
                <About />
                <Advantages />
                <PricesInfo />
            </PageWrapper>
        </>
        )
    
}

export default IndibaPage;