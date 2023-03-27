import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-weight: ${({ theme }) => theme.font.weightLight};
    font-family: ${({ theme }) => theme.font.familyPrimary};
}

  body {
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundDark}
}

  a {
  text-decoration: none;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.sharedColors.accent};
    outline-offset: ${({ theme }) => theme.layout.gapLittle};
    border-radius: ${({ theme }) => theme.layout.radius};
  }
}
`;
