import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaults';
import { Router } from './Routers';
import { Header } from './components/Header';
import { CarrinhoProvider } from './contexts/CarrinhoContext';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CarrinhoProvider>
        <Header />
        <Router />
      </CarrinhoProvider>
    </ThemeProvider>
  );
}


