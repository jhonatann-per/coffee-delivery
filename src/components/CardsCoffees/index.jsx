import axios from "axios";
import { useEffect, useState } from "react";
import { Container, CoffeesVitrines, Tags, SelectContent } from "./styles";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import { Minus, Plus, ShoppingCart} from '@phosphor-icons/react'
import { Link } from "react-router-dom";


export const CardsCoffees = () => {
  const [coffees, setCoffees] = useState([]);
  const { itens, adicionarItem, removerItem, formateValue } = useCarrinho();
  

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        setCoffees(response.data.cafes);

      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

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
                    <Link to="/carrinho">
                      <button><ShoppingCart size={22} weight="fill"/></button>
                    </Link>
                    
                </SelectContent>
              </div>
              
            </CoffeesVitrines>
          );
        })}
      </section>
    </Container>
  );
};
