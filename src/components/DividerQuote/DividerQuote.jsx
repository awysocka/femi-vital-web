import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/images/photo-2-avatar.jpg';

const Wrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Quote = styled.blockquote`
  max-width: 1160px;
  text-align: center;
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.cormorant};
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: 400;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.blockquoteMobile};
  text-align: center;

  &:before {
    content: '\\201C';
    position: relative;
    top: 5px;
    left: -10px;
    font-size: ${({ theme }) => theme.fontSize.blockquote};
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.lightPink};
  }
`;

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 16px;
`;

const Content = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Caption = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  color: ${({ theme }) => theme.color.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  p {
    margin: 0;
  }

  :first-child {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: 600;
    line-height: 2;
  }
`;

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
