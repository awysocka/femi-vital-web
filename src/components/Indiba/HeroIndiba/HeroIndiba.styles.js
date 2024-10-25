import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 500px;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 55%;
    /* max-width: 600px; */
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    max-width: 900px;
  }
`;
export const TextWrapper = styled.div`
  z-index: 0;
  padding: 0 20px 20px;
  max-width: 400px;

  ${({ theme }) => theme.mq.tablet} {
    margin-left: -64px;
    margin-top: 80px;
    z-index: 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: -64px;
    margin-top: 120px;
    z-index: 0;
    max-width: 600px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    max-width: 900px;
  }
`

export const Content = styled.div`
  margin-top: 83px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column-reverse;
  background-color: ${({ theme }) => theme.color.lightGrey};

  ${({ theme }) => theme.mq.tablet} {
      flex-direction: row;
      margin-top: 83px;
      padding-top: 80px;
      padding-bottom: 80px;
    }

  ${({ theme }) => theme.mq.desktop} {
      margin-top: 98px;
      padding-top: 192px;
      padding-bottom: 164px;
    }

  h1 {
    font-family: ${({ theme }) => theme.fontFamily.cormorant};
    color: ${({ theme }) => theme.color.darkBlue};
    font-weight: 500;
    font-style: italic;
    line-height: 1;
    font-size: ${({ theme }) => theme.fontSize.headingPrimaryMobile};
    margin: 0;
    margin-bottom: 20px;
    max-width: 400px;

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.headingPrimary};
      max-width: 700px;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
      font-size: ${({ theme }) => theme.fontSize.headingBig};
      max-width: 700px;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.body};
    color: ${({ theme }) => theme.color.darkGrey};
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    max-width: 440px;
    line-height: 1.6;
    margin: 0;
    margin-bottom: 20px;
  }
`;
