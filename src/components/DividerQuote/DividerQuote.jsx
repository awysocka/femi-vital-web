import React from 'react';
import avatar from '../../assets/images/photo-2-avatar.jpg';
import { Wrapper, Quote, Avatar, Content, Caption } from './DividerQuotes.styles';

const DividerQuote = () => {
  return (
    <Wrapper>
      <Quote>
        W ciągu swej kilkunastoletniej pracy zawodowej pomogłam tysiącom Kobiet w poprawie jakości
        urologinekologicznego komfortu życia. Widząc potrzeby Pacjentek stworzyłam miejsce, aby
        każda z nas miała szansę skorzystać z terapii na wysokim poziomie.
      </Quote>
      <Content>
        <Avatar src={avatar} alt='' />
        <Caption>
          <Caption>Iwona Mazur-Ważny</Caption>
          <p>Femi-Vital, założycielka</p>
        </Caption>
      </Content>
    </Wrapper>
  );
};

export default DividerQuote;
