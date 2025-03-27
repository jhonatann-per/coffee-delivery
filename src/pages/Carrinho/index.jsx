import { Container, EnderecoForm, PedidoContent, TotalValues, FormDiv, CardItens, RemoveItem, CoffeesAddeds, HeaderLocation, ItemQuatitDiv, PaymentHeader, OptionPayment} from "./styles";
import { 
  MapPin, 
  Minus, Plus, Trash, Bank,
  CreditCard,
  CurrencyDollar,
  Money } from '@phosphor-icons/react';
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
          <PaymentHeader>
              <CurrencyDollar color={"#8047F8"} size={22} />
              <div>
                <p> Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
          </PaymentHeader>
          
          <OptionPayment>
            <button>
              <CreditCard color={"#8047F8"} size={16} />
              <span>Cartão de crédito</span>
            </button>
            <button>
              <Bank color={"#8047F8"} size={16} />
              <span>Cartão de Débito</span>
            </button>
            <button>
              <Money color={"#8047F8"} size={16} />
              <span>Dinheiro</span>
            </button>
          </OptionPayment>
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
                <CoffeesAddeds key={index}>
                  <img src={item.imagem} style={{width: '60px', height: '60px'}} alt={`Copo de ${item.nome}`} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <header>
                      <h3>{item.nome}</h3> 
                      <strong>{formateValue(item.quantidade * item.preco)}</strong>
                    </header>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem'}}>
                      <ItemQuatitDiv>
                        <button onClick={() => removerItem(item.id)}><Minus size={14} /></button>  
                        <span>{item.quantidade}</span>
                        <button onClick={() => adicionarItem(item)}><Plus size={14} /></button>                   
                      </ItemQuatitDiv>
                      <RemoveItem>
                          <button>
                            <Trash size={18} />
                            <span>REMOVER</span>
                          </button>
                      </RemoveItem>
                    </div>
                  </div>
                </CoffeesAddeds>
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

            <footer>
              <button>CONFIRMAR PEDIDO</button>
            </footer>
          </TotalValues>
        </section>
      </PedidoContent>
    </Container>
  );
};
