import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";


const CarrinhoContext = createContext();


const carregarCarrinhoDoLocalStorage = () => {
  const carrinhoSalvo = localStorage.getItem("carrinho");
  if (carrinhoSalvo) {
    return JSON.parse(carrinhoSalvo);
  }
  return [];
};



const salvarCarrinhoNoLocalStorage = (carrinho) => {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

const formateValue = (valor) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(valor);


export const CarrinhoProvider = ({ children }) => {
  const [itens, setItens] = useState(carregarCarrinhoDoLocalStorage());
  const [totalPreco, setTotalPreco] = useState(0);

  useEffect(() => {
    salvarCarrinhoNoLocalStorage(itens);
    const novoTotal = itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
    setTotalPreco(novoTotal);
  }, [itens]);


  const adicionarItem = (adicionaMaisUmCafe) => {
    setItens((itensAtuais) => {
      const itemExistente = itensAtuais.find((item) => item.id === adicionaMaisUmCafe.id);

      if (itemExistente) {
        return itensAtuais.map((item) =>
          item.id === adicionaMaisUmCafe.id
            ? { ...item, quantidade: item.quantidade + 1 } 
            : item 
        );
      }

      return [...itensAtuais, { ...adicionaMaisUmCafe, quantidade: 1 }];
    });
  };

  
  const removerItem = (itemId) => {
    setItens((itensAtuais) => {
      const itemRemovido = itensAtuais.find((item) => item.id === itemId);
      if (!itemRemovido) return itensAtuais;
      const novaLista = itensAtuais
        .map((item) =>
          item.id === itemId
            ? { ...item, quantidade: item.quantidade - 1 } : item )
        .filter((item) => item.quantidade > 0);
      return novaLista;
    });
  };

  

  return (
    <CarrinhoContext.Provider value={{ itens, totalPreco, adicionarItem, removerItem, formateValue }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

CarrinhoProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};