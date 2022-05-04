import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: 40px 0;

  ${({ theme }) => theme.mq.desktop} {
    padding: 78px 0px;
  }

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: ${({ theme }) => theme.fontSize.headingSecondaryMobile};
    font-family: ${({ theme }) => theme.fontFamily.cormorant};
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.color.darkBlue};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.headingSecondary};
      margin-bottom: 60px;
    }
  }
`;

export const TestimonialsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-gap: 40px;

  li {
    margin: 0 20px;

    ${({ theme }) => theme.mq.desktop} {
      margin: 0 0 0 20px;
    }
  }
`;

export const Quote = styled.blockquote`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ theme }) => theme.color.darkGrey};
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.6;
  position: relative;

  &:before {
    content: '\\201C';
    position: absolute;
    top: -10px;
    left: -18px;
    font-size: ${({ theme }) => theme.fontSize.blockquote};
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.lightPink};
    line-height: 1;
  }
`;

export const Caption = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: 600;
  margin: 0;
`;
