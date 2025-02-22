import { Container, EnderecoForm, PedidoContent, TotalValues, FormDiv, CardItens, HeaderLocation, ButtonQuatitDiv } from "./styles";
import { MapPin, Minus, Plus,Trash } from '@phosphor-icons/react';
import { useCarrinho } from '../../contexts/CarrinhoContext';

export const Carrinho = () => {
  const { itens, removerItem, adicionarItem, formateValue, totalPreco } = useCarrinho();

  return (
    <Container>
      <EnderecoForm>
        <header>Complete seu pedido</header>
        <section>
          <HeaderLocation>
            <MapPin size={22} color={'#C47F17'} style={{borderBottom:'2px solid #C47F17'}}/>
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderLocation>
          <FormDiv>
            <form>
              <input type="number" name="cep" placeholder="CEP" />
              <input type="text" name="rua" placeholder="Rua" />
              <input type="number" name="numero" placeholder="Número" />
              <input type="text" name="complemento" placeholder="Complemento" />
              <input type="text" name="bairro" placeholder="Bairro" />
              <input type="text" name="cidade" placeholder="Cidade" />
              <input type="text" name="uf" placeholder="UF" />
            </form>
          </FormDiv>
        </section>
        <article>
          <p>Pagamento</p>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          <div>
            <button>Cartão de crédito</button>
            <button>Cartão de crédito</button>
            <button>Cartão de crédito</button>
          </div>
        </article>
      </EnderecoForm>

      <PedidoContent>
        <header>Cafés selecionados</header>
        <section>
          <CardItens>
            {itens.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              itens.map((item, index) => (
                <div key={index}>
                  <img src={item.imagem} alt={`Copo de ${item.nome}`} />
                  <div>
                    <h3>{item.nome}</h3>
                    <ButtonQuatitDiv>
                      <button><Plus size={14} /></button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => removerItem(item.id)}>
                        <Minus size={14} />
                      </button>
                    </ButtonQuatitDiv>
                      <div>
                        <button>
                          <Trash size={22} weight="fill"/>
                        </button>
                      </div>
                  </div>
                </div>
              ))
            )}
          </CardItens>
          
          <TotalValues>
            <div>
              <p>Total de itens:</p>
              <p>{formateValue(totalPreco)}</p>
            </div>
            <div>
              <p>Entrega:</p>
              <span>Calcular</span>
            </div>
            <div>
              <strong>Total:</strong>
              <strong>{formateValue(totalPreco)}</strong>
            </div>
        </TotalValues>
        <button>Confirmar pedido</button>
        </section>
        
      </PedidoContent>
    </Container>
  );
};
