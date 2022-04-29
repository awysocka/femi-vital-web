import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    padding: 0 60px;
  }
`;
