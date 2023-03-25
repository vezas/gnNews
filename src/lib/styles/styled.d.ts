import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    sharedColors: {
      accent: string;
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
    };
    layout: {
      gapElementsLittle: string;
      gapElementsSmall: string;
      gapElementsMedium: string;
      gapElementsBig: string;
    };
  }
}
