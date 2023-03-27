import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    sharedColors: {
      accent: string;
      white: string;
      black: string;
    };
    colors: {
      background: string;
      backgroundDark: string;
      font: string;
      fontDark: string;
    };
    font: {
      familyPrimary: string;
      familySecondary: string;
      weightLight: number;
      weightSemiLight: number;
      weightSemiBold: number;
      weightBold: number;
      sizeXSmall: string;
      sizeSmall: string;
      sizeMedium: string;
      sizeLarge: string;
      sizeXLarge: string;
    };
    layout: {
      gapLittle: string;
      gapSmall: string;
      gapMedium: string;
      gapBig: string;
      radius: string;
    };
  }
}
