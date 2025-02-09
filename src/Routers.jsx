import { Routes, Route } from 'react-router-dom'; // Remova o BrowserRouter daqui
import { Home } from './pages/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Adicione outras rotas aqui, se necessário */}
    </Routes>
  );
};