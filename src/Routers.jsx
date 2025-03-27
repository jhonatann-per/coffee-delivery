import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Carrinho } from './pages/Carrinho';
import { SuccessSellers } from './pages/SuccessSellers';
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />}/>
      <Route path="/confirmacao-pedido" element={<SuccessSellers />} />
    </Routes>
  );
};