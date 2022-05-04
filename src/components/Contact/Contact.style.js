import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    max-width: ${({ theme }) => theme.maxWidth};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
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
`;

export const Map = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: ${({ theme }) => theme.radius};

  ${({ theme }) => theme.mq.tablet} {
    height: 520px;
  }
`;

export const IconContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.color.lightPink};
  border-radius: ${({ theme }) => theme.radius};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 24px 54px 0;

  svg {
    color: ${({ theme }) => theme.color.darkGrey};
    width: 20px;
    height: 20px;
  }
`;

export const ContactList = styled.ul`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  color: ${({ theme }) => theme.color.darkGrey};
  margin-bottom: 40px;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 0;
  }

  li {
    display: flex;
  }

  p {
    margin: 0;

    &:first-child {
      font-weight: 600;
      line-height: 1.6;
    }
  }
`;
