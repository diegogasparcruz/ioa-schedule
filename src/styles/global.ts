import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    outline: 0;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;

    @media(max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  } 

  body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${({ theme }) => css`
      font-family: ${theme.typography.family.primary};
      font-weight: ${theme.typography.weight.regular};
    `}
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${({ theme }) => theme.typography.weight.semiBold};
  }

  a {
    text-decoration: none;
  }

  button {
    appearance: none;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 30px;
  }
  ::-webkit-scrollbar {
    width: 0.25rem;
  }
`;
