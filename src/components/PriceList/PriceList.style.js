import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0;

  ${({ theme }) => theme.mq.desktop} {
    padding: 78px 0px;
  }

  h2 {
    margin: 0;
    margin-bottom: 30px;
    text-align: center;
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

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.blue};
  border-collapse: collapse;
  margin: 0 auto;
  td {
    border: 1px solid ${({ theme }) => theme.color.blue};
    padding: 10px;
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: ${({ theme }) => theme.fontSize.body};
    color: ${({ theme }) => theme.color.darkGrey};
    line-height: 1.6;

    &:last-child {
      font-weight: 500;
    }

    ${({ theme }) => theme.mq.tablet} {
      padding: 16px;

      &:last-child {
        font-size: ${({ theme }) => theme.fontSize.blockquoteMobile};
      }
    }

    ${({ theme }) => theme.mq.desktop} {
      :first-child {
        padding: 25px 16px;
      }

      &:not(:first-child) {
        padding: 25px 50px;
        text-align: center;
      }
    }
  }
`;
