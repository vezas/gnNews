import { FC, ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from 'lib/store';

const sharedTheme = {
  sharedColors: {
    accent: 'hsl(296, 75%, 25.5%)'
  },
  font: {
    familyPrimary: '"Roboto", sans-serif',
    familySecondary: '"Ubuntu", sans-serif',
    weightLight: 300,
    weightSemiLight: 400,
    weightSemiBold: 700,
    weightBold: 900
  },
  layout: {
    gapElementsLittle: '0.5rem',
    gapElementsSmall: '1.5rem',
    gapElementsMedium: '3rem',
    gapElementsBig: '5rem'
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
  const isDarkTheme = useSelector((state: RootState) => state.ui.darkTheme);

  return <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};
