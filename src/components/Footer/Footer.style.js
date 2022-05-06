import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 40px 0 0;

  p {
    margin: 0;
  }
`;
export const RoundBackground = styled.div`
  position: absolute;
  min-height: 250px;
  max-height: 800px;
  width: 100%;
  height: 35vh;
  overflow: hidden;
  z-index: -2;
  ${({ theme }) => theme.mq.desktop} {
    height: 40vh;
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

export const Logo = styled.img`
  width: 230px;

  ${({ theme }) => theme.mq.desktop} {
    width: 280px;
  }
`;

export const SocialMediaContainer = styled.div`
  svg {
    width: 40px;
    height: 40px;
    margin: 35px 10px 25px;
    color: ${({ theme }) => theme.color.darkBlue};
  }
`;

export const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  text-align: center;
  padding: 20px;

  ${({ theme }) => theme.mq.desktop} {
    padding: 40px;
  }

  p {
    a {
      color: ${({ theme }) => theme.color.darkGrey};
    }
  }
`;
