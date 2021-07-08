import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global';
import theme from 'styles/theme';

import { AppRouter } from 'pages/AppRoutes';

import { Header } from 'components/shared/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  );
}
