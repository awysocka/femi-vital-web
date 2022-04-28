import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  ${({ theme }) => theme.mq.desktop} {
    padding: 78px 0px;
  }
`;

export const Quote = styled.blockquote`
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

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.headingPrimary};
      left: -20px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.blockquote};
    text-align: center;
    line-height: 1.2;
  }
`;

export const Avatar = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 16px;

  ${({ theme }) => theme.mq.desktop} {
    width: 64px;
    height: 64px;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 40px;

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 69px;
  }
`;

export const Caption = styled.div`
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

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.caption};
    }
  }
`;
