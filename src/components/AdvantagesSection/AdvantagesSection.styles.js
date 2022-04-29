import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: 40px 0;

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

  ${({ theme }) => theme.mq.desktop} {
    padding: 78px 0px;
  }
`;

export const AdvantagesList = styled.ul`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  color: ${({ theme }) => theme.color.darkGrey};

  li:not(:last-child) {
    margin-bottom: 20px;

    ${({ theme }) => theme.mq.desktop} {
      margin-bottom: 0;
    }
  }

  h3 {
    font-weight: 600;
    line-height: 1.4;
    margin: 0;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.caption};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.headingTertiary};
    }
  }

  p {
    margin: 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    grid-gap: 110px;
  }
`;
