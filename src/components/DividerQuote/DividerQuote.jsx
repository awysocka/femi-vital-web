import React from 'react';
import { Wrapper, Quote, AvatarContainer, Content, Caption } from './DividerQuotes.styles';
import { StaticImage } from 'gatsby-plugin-image';

const DividerQuote = () => {
  return (
    <Wrapper>
      <Quote>
        W ciągu swej kilkunastoletniej pracy zawodowej pomogłam tysiącom Kobiet w&nbsp;poprawie
        jakości urologinekologicznego komfortu życia. Widząc potrzeby Pacjentek stworzyłam miejsce,
        aby każda z nas miała szansę skorzystać z terapii na wysokim poziomie.
      </Quote>
      <Content>
        <AvatarContainer>
          <StaticImage
            src='../../assets/images/photo-2-avatar.jpg'
            alt='zdjęcie Iwony Mazur-Ważny, właścicielka fami-vital, '
            objectFit
            placeholder='blurred'
          />
        </AvatarContainer>
        <Caption>
          <p>Iwona Mazur-Ważny</p>
          <p>Femi-Vital, właścicielka</p>
        </Caption>
      </Content>
    </Wrapper>
  );
};

export default DividerQuote;
