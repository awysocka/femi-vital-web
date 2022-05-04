import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.lightBlue};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    padding: 78px 0px;
  }

  h2 {
    max-width: 560px;
    text-align: center;
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

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledLink = styled.a`
  min-width: 160px;
  color: ${({ isLight, theme }) => (isLight ? theme.color.darkBlue : theme.color.lightGrey)};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.body};
  background-color: ${({ isLight, theme }) =>
    isLight ? theme.color.lightPink : theme.color.darkBlue};
  border: 1px solid
    ${({ isLight, theme }) => (isLight ? theme.color.lightPink : theme.color.darkBlue)};
  border-radius: ${({ theme }) => theme.radius};
  padding: 6px 16px;
  line-height: 1.75;
  text-align: center;
  cursor: pointer;

  :first-child {
    margin-bottom: 30px;

    ${({ theme }) => theme.mq.tablet} {
      margin-bottom: 0;
      margin-right: 40px;
    }
  }
`;
