import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: auto;

  p {
    margin: 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 33vh;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    height: 30vh;
  }
`;
export const RoundBackground = styled.div`
  position: absolute;
  min-height: 250px;
  max-height: 800px;
  width: 100%;
  height: 36vw;
  overflow: hidden;
  z-index: -2;

  ${({ theme }) => theme.mq.desktop} {
    height: 28vw;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    height: 20vw;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.lightBlue};
    border-radius: 50% 50% 0 0/ 100% 100% 0 0;
    transform: scaleX(2);
    z-index: -1;

    ${({ theme }) => theme.mq.desktop} {
      transform: scaleX(1.7);
    }
  }
`;

export const LogoContainer = styled.div`
  width: 200px;

  ${({ theme }) => theme.mq.desktop} {
    width: 250px;
  }
`;

export const SocialMediaContainer = styled.div`
  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.color.darkBlue};
  }

  a {
    display: inline-block;
    margin: 25px 15px 15px;

    ${({ theme }) => theme.mq.tablet} {
      margin: 35px 10px 15px;
    }
  }
`;

export const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  text-align: center;
  padding: 20px;

  ${({ theme }) => theme.mq.desktop} {
    padding: 40px 20px 20px;
  }

  p {
    a {
      color: ${({ theme }) => theme.color.darkGrey};
      margin-left: 5px;
      padding: 2px 4px;
      transition: all 0.3s ease;

      ${({ theme }) => theme.mq.hover} {
        &:hover {
          background-color: ${({ theme }) => theme.color.hoverPink};
          border-radius: ${({ theme }) => theme.radius};
          padding: 2px 4px;
        }
      }
    }
  }
`;
