import axios from "axios";
import { useEffect, useState } from "react";
import { Container, CoffeesVitrines, Tags, SelectContent } from "./styles";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import { Minus, Plus, ShoppingCart} from '@phosphor-icons/react'


export const CardsCoffees = () => {
  const [coffees, setCoffees] = useState([]);
  const { itens, totalPreco, adicionarItem, removerItem, formateValue } = useCarrinho();
  

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
              <div style={{ position: 'relative' }}>
                <img src={coffee.imagem} alt={`Copo de ${coffee.nome}`} style={{ position: 'absolute', top: '-60px',right: '-50px', width: '120px', height: '120px' }} />
              </div>
              <div style={{marginTop: '55px', textAlign: 'center'}}>
                <Tags>
                  {coffee.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </Tags>
                  <h2>{coffee.nome}</h2>
                  <p>{coffee.descricao}</p>
                <SelectContent>
                    <h2>{formateValue(coffee.preco)}</h2>
                    <div>
                      <button onClick={() => removerItem(coffee.id)} disabled={quantidade === 0}><Minus size={14} /></button>
                      <span>{quantidade}</span>
                      <button onClick={() => adicionarItem(coffee)}><Plus size={14} /></button>
                    </div>
                    
                    <button><ShoppingCart size={22} weight="fill"/></button>
                    
                </SelectContent>
              </div>
              
            </CoffeesVitrines>
          );
        })}
      </section>

      <footer>
        <h2>Total do Carrinho: R$ {formateValue(totalPreco)}</h2>
      </footer>
    </Container>
  );
};
