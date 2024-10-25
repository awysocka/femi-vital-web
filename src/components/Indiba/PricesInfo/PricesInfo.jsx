import * as React from 'react';
import { Wrapper, StyledLink } from './PricesInfo.styles'


const PricesInfo = () => {
    return (
        <Wrapper>
            <h2>Aktualny cennik zabiegów wykonywanych technologią marki Indiba znajdziesz na naszym Booksy.</h2>
            <StyledLink  
                target='_blank'
                rel='noopener noreferrer'
                href="https://femivitalfizjoterapiakobieca.booksy.com"
            >
                Sprawdź cennik
            </StyledLink>
        </Wrapper>
  
    )
}

export default PricesInfo; 