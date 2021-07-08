import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global';
import theme from 'styles/theme';

import { AppRouter } from 'pages/AppRoutes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  );
}
