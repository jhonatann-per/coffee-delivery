import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const EnderecoContext = createContext();

export const EnderecoProvider = ({ children }) => {

  const [endereco, setEndereco] = useState(() => {
    const savedEndereco = localStorage.getItem("endereco");
    return savedEndereco ? JSON.parse(savedEndereco) : { cidade: "", uf : "", bairro: "", rua: "" };
  });

  
  useEffect(() => {
    if (endereco) {
      localStorage.setItem("endereco", JSON.stringify(endereco));
    }
  }, [endereco]);

  return (
    <EnderecoContext.Provider value={{ endereco, setEndereco }}>
      {children}
    </EnderecoContext.Provider>
  );
};

EnderecoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useEndereco = () => useContext(EnderecoContext);
