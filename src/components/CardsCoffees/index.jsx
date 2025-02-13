import axios from "axios";
import { useEffect, useState } from "react";
import { Container, CoffeesVitrines, Tags } from "./styles";
import { useCarrinho } from "../../contexts/CarrinhoContext";

export const CardsCoffees = () => {
  const [coffees, setCoffees] = useState([]);
  const { itens, totalPreco, adicionarItem, removerItem } = useCarrinho();

  useEffect(() => {
    axios
      .get("http://localhost:3001/cafes")
      .then((response) => {
        setCoffees(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  // Calculando itemCarrinho e quantidade fora do return
  const getQuantidade = (coffee) => {
    const itemCarrinho = itens.find((item) => item.id === coffee.id);
    return itemCarrinho?.quantidade || 0;
  };

  return (
    <Container>
      <header>
        <h1>Nossos Cafés</h1>
      </header>
      <section>
        {coffees.map((coffee) => {
          const quantidade = getQuantidade(coffee);

          return (
            <CoffeesVitrines key={coffee.id}>
              <img src={coffee.imagem} alt={`Copo de ${coffee.nome}`} />
              <Tags>
                {coffee.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </Tags>
              <h2>{coffee.nome}</h2>
              <p>{coffee.descricao}</p>
              <div>
                <h2>R$ {coffee.preco}</h2>
                <p>Quantidade: {quantidade}</p>
                <button onClick={() => adicionarItem(coffee)}>add</button>
                <button onClick={() => removerItem(coffee.id)} disabled={quantidade === 0}>
                  Delete
                </button>
              </div>
            </CoffeesVitrines>
          );
        })}
      </section>

      <footer>
        <h2>Total do Carrinho: R$ {totalPreco.toFixed(2)}</h2>
      </footer>
    </Container>
  );
};
