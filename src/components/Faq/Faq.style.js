import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0;
  margin-bottom: 40px;

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
    text-align: center;

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.headingSecondary};
      margin-bottom: 60px;
    }
  }
`;

export const ContentContainer = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin: 0 0 20px 0;

  ${({ theme }) => theme.mq.tablet} {
    margin: 0;
  }
`;
