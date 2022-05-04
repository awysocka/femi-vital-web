import React from 'react';
import { PageWrapper } from '../../assets/styles/PageStyles.styles';
import { Wrapper, LinksWrapper, StyledLink } from './DividerContact.styles';

const DividerContact = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <h2>Umów wizytę tak, jak Tobie najwygodniej.</h2>
        <LinksWrapper>
          <StyledLink isLight href='#'>
            Umów online
          </StyledLink>
          <StyledLink isDark href='#'>
            Zadzwoń
          </StyledLink>
        </LinksWrapper>
      </PageWrapper>
    </Wrapper>
  );
};

export default DividerContact;
