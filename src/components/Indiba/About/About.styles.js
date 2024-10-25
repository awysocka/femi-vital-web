import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;

  ${({ theme }) => theme.mq.desktop} {
    padding-top: 116px;
    padding-bottom: 116px;
    }

  p {
    font-size: ${({ theme }) => theme.fontSize.body};
    color: ${({ theme }) => theme.color.darkGrey};
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    line-height: 1.6;
    margin: 0;
    margin-bottom: 20px;

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.caption};
    }
  }
  `;