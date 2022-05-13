import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const RoundBackground = styled.div`
  position: absolute;
  min-height: 500px;
  max-height: 800px;
  width: 100%;
  height: 65vh;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.lightBlue};
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    transform: scaleX(2.5);
    z-index: -1;
  }

  ${({ theme }) => theme.mq.tablet} {
    height: 45vh;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 65vh;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    height: 80vh;
  }
`;

export const Content = styled.div`
  padding: 100px 20px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-family: ${({ theme }) => theme.fontFamily.cormorant};
    color: ${({ theme }) => theme.color.darkBlue};
    font-weight: 500;
    font-style: italic;
    line-height: 1;
    font-size: ${({ theme }) => theme.fontSize.headingPrimaryMobile};
    margin: 0;
    margin-bottom: 20px;

    ${({ theme }) => theme.mq.tablet} {
      max-width: 800px;
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.headingPrimary};
      margin-top: 34px;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.body};
    color: ${({ theme }) => theme.color.darkGrey};
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    max-width: 470px;
    line-height: 1.6;
    margin: 0;
    margin-bottom: 41px;
  }
`;

export const HeroImageContainer = styled.div`
  width: 96%;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    width: 66%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 60%;
  }
`;
