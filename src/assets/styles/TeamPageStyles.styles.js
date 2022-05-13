import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 140px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;

  ${({ theme }) => theme.mq.desktop} {
    margin: 180px 0 140px;
    grid-template-columns: 1fr 1fr;
  }

  h1 {
    font-family: ${({ theme }) => theme.fontFamily.cormorant};
    font-style: italic;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.headingPrimaryMobile};
    color: ${({ theme }) => theme.color.darkBlue};
    margin: 0;
    margin-bottom: 20px;
  }

  p {
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  color: ${({ theme }) => theme.color.darkBlue};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.caption};
  background-color: ${({ theme }) => theme.color.lightPink};
  border: 1px solid ${({ theme }) => theme.color.lightPink};
  border-radius: ${({ theme }) => theme.radius};
  padding: 12px 18px;
  line-height: 1.75;
  text-align: center;
  vertical-align: center;
  cursor: pointer;
  margin-top: 40px;

  svg {
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }

  span {
    line-height: 1;
  }

  ${({ theme }) => theme.mq.hover} {
    &:hover {
      background-color: ${({ theme }) => theme.color.hoverPink};
      border: 1px solid ${({ theme }) => theme.color.hoverPink};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
`;
