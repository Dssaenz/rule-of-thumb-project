import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';
import { lightTheme } from './main';

import { PropsChildren } from '../types/app';

function AppTheme({ children }: PropsChildren) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;
