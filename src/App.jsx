import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaults';
import { Router } from './Routers';
import { Header } from './components/Header';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Router />
    </ThemeProvider>
  );
}


