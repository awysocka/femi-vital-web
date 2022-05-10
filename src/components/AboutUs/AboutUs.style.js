import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.tablet} {
    max-width: ${({ theme }) => theme.maxWidth};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-gap: 160px;
    grid-template-columns: 1fr 1.2fr;
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

  p {
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.darkGrey};
    line-height: 1.6;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 560px;

  ${({ theme }) => theme.mq.tablet} {
    justify-self: center;
  }
`;
