import { FC, ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from 'lib/store';

const sharedTheme = {
  sharedColors: {
    accent: 'hsl(296, 75%, 25.5%)',
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)'
  },
  font: {
    familyPrimary: '"Roboto", sans-serif',
    familySecondary: '"Ubuntu", sans-serif',
    weightLight: 300,
    weightSemiLight: 400,
    weightSemiBold: 700,
    weightBold: 900,
    sizeXSmall: '0.8rem',
    sizeSmall: '1rem',
    sizeMedium: '1.5rem',
    sizeLarge: '3rem',
    sizeXLarge: '4rem'
  },
  layout: {
    gapLittle: '0.5rem',
    gapSmall: '1.5rem',
    gapMedium: '3rem',
    gapBig: '5rem',
    radius: '5px'
  }
};

const darkTheme: DefaultTheme = {
  colors: {
    background: 'hsl(217, 8.5%, 18.5%)',
    backgroundDark: 'hsl(220, 10.5%, 11%)',
    font: 'hsl(0, 0%, 100%)',
    fontDark: 'hsl(0, 2.298850574712635%, 65.88235294117646%)'
  },
  ...sharedTheme
};

const lightTheme: DefaultTheme = {
  colors: {
    background: 'hsl(0, 0%, 100%)',
    backgroundDark: 'hsl(0, 1.408450704225387%, 86.07843137254902%)',
    font: 'hsl(0, 0%, 0%)',
    fontDark: 'hsl(0, 0.5%, 20%)'
  },
  ...sharedTheme
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const Theme: FC<ThemeProviderProps> = ({ children }) => {
  const isDarkTheme = useSelector(({ ui }: RootState) => ui.darkTheme);

  return <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};
