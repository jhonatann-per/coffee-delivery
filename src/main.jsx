import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaults.jsx";
import { App } from "./App.jsx";
import { CarrinhoProvider } from "./contexts/CarrinhoContext"; 
import { EnderecoProvider } from "./contexts/EnderecoContext"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CarrinhoProvider>
          <EnderecoProvider>
            <App />
          </EnderecoProvider>
        </CarrinhoProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
