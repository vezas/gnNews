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
    familyPrimary: '"Montserrat", sans-serif',
    weightLight: 300,
    weightNormal: 400,
    weightBold: 700,
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
    background: 'hsl(0, 0%, 17%)',
    backgroundDark: 'hsl(0, 0%, 12%)',
    font: 'hsl(0, 0%, 100%)',
    fontSecondary: 'hsl(0, 2.298850574712635%, 65.88235294117646%)',
    shadowColor: 'hsl( 0 0 100% / 0.5)'
  },
  ...sharedTheme
};

const lightTheme: DefaultTheme = {
  colors: {
    background: 'hsl(0, 0%, 100%)',
    backgroundDark: 'hsl(0, 1.408450704225387%, 86.07843137254902%)',
    font: 'hsl(0, 0%, 0%)',
    fontSecondary: 'hsl(0, 0.5%, 20%)',
    shadowColor: 'hsl( 0 0 0% / 0.5)'
  },
  ...sharedTheme
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const Theme: FC<ThemeProviderProps> = ({ children }) => {
  const themeMode = useSelector(({ ui }: RootState) => ui.themeMode);

  console.log(themeMode);

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>
  );
};
