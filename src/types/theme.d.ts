import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      dark: string;
      backgroundColor: string;
      lightGreen: string;
      green: string;
      lightOrange: string;
      orange: string;
      gray: string;
      darkGradiant: string;
      icons: {
        core: string;
        white: string;
      };
      text: {
        dark: string;
        light: string;
      };
    };
    text: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      tl: string;
      tm: string;
      ts: string;
    };
    margin: {
      marginSmall: string;
    };
    padding: {
      paddingSmall: string;
    };
  }
}
