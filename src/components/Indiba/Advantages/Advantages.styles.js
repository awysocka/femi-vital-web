import styled from 'styled-components';
import { BsCheck2 } from 'react-icons/bs'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 40px;

  ${({ theme }) => theme.mq.tablet} {
    max-width: ${({ theme }) => theme.maxWidth};
    padding: 40px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-gap: 100px;
    grid-template-columns: 1fr 1fr;
    padding: 100px 0px;
  }

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: ${({ theme }) => theme.fontSize.blockquoteMobile};
    font-family: ${({ theme }) => theme.fontFamily.cormorant};
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.color.darkBlue};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.blockquote};
      margin-bottom: 60px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.darkGrey};
    line-height: 1.6;
    margin: 0;
  }

  li {
    display: flex;
    gap: 26px;
    align-items: flex-start;

    &:not(:last-child) {
    margin-bottom: 12px;
  }

  }

  &:last-child {
    margin-bottom: 60px;
  }

  &:nth-child(odd) {
    flex-direction: column-reverse;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 560px;

  ${({ theme }) => theme.mq.tablet} {
    justify-self: center;
  }
`;

export const IconeWrapper = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
`

export const StyledIcon = styled(BsCheck2)`
    height: 20px;
    width: auto;
    color: ${({ theme }) => theme.color.darkGrey};
   
`