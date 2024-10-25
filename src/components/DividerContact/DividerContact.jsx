import React from 'react';
import { PageWrapper } from '../../assets/styles/PageStyles.styles';
import { Wrapper, LinksWrapper, StyledLink } from './DividerContact.styles';

const DividerContact = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <h2>Umów wizytę tak, jak Tobie najwygodniej.</h2>
        <LinksWrapper>
          <StyledLink
            isLight
            target='_blank'
            rel='noopener noreferrer'
            href='https://femivitalfizjoterapiakobieca.booksy.com'
          >
            Umów online
          </StyledLink>
          <StyledLink isDark href='tel:+48 661 180 687'>
            Zadzwoń
          </StyledLink>
        </LinksWrapper>
      </PageWrapper>
    </Wrapper>
  );
};

export default DividerContact;
