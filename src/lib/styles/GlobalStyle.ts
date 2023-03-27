import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { devices } from 'lib/styles';

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

    @media ${devices.tablet} {
      font-size: 75%;
    }

    @media ${devices.laptop} {
      font-size: 93.75%;
    }
}

  body {
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundDark}
}

#root {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 10vh 85vh 5vh;
  grid-template-columns: min-content 1fr;
  grid-template-areas: 
  'header header'
  'side-menu content'
  'footer footer'
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
