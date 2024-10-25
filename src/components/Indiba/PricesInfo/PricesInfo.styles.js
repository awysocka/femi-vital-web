import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 4px solid ${({ theme }) => theme.color.lightPink};
    border-radius: ${({ theme }) => theme.radius};
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    margin-top: 40px;
    padding: 28px;

    ${({ theme }) => theme.mq.desktop} {
        padding: 40px;
        margin-bottom: 160px;
        margin-top: 100px;
        min-height: 200px;
    }

    h2 {
        max-width: 700px;
        text-align: center;
        margin: 0;
        margin-bottom: 20px;
        font-size: ${({ theme }) => theme.fontSize.blockquoteMobile};
        font-family: ${({ theme }) => theme.fontFamily.cormorant};
        font-style: italic;
        font-weight: 500;
        color: ${({ theme }) => theme.color.darkBlue};

        ${({ theme }) => theme.mq.desktop} {
            font-size: ${({ theme }) => theme.fontSize.blockquote};
            margin-bottom: 40px;
            max-width: 760px;
        }
    }
`

export const StyledLink = styled.a`
  min-width: 160px;
  color: ${({ theme }) => (theme.color.lightGrey)};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.body};
  background-color: ${({ theme }) => theme.color.darkBlue};
  border: 1px solid
    ${({ theme }) => ( theme.color.darkBlue)};
  border-radius: ${({ theme }) => theme.radius};
  padding: 6px 16px;
  line-height: 1.75;
  text-align: center;
  cursor: pointer;

  ${({ theme }) => theme.mq.hover} {
    &:hover {
      background-color: ${({ theme }) => theme.color.hoverBlue};
      border: 1px solid
        ${({ theme }) => (theme.color.hoverBlue)};
    }
  }
`