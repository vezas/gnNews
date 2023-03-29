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
      fontSecondary: string;
      shadowColor: string;
    };
    font: {
      familyPrimary: string;
      weightLight: number;
      weightNormal: number;
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
