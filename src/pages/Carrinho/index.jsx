import { Container, EnderecoForm, PedidoContent, TotalValues, FormDiv } from "./styles";
import { MapPin, Trash } from '@phosphor-icons/react';
import { useCarrinho } from '../../contexts/CarrinhoContext';

export const Carrinho = () => {
  const { itens, removerItem, formateValue } = useCarrinho();

  return (
    <Container>
      <EnderecoForm>
        <header>Complete seu pedido</header>
        <section>
          <div>
            <MapPin size={22} />
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
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
          <TotalValues>
            {itens.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              itens.map((item, index) => (
                <div key={index}>
                  <img src={item.imagem} alt={`Copo de ${item.nome}`} />
                  <h3>{item.nome}</h3>
                  <p>Quantidade: {item.quantidade}</p>
                  <strong>Total: {formateValue(item.preco * item.quantidade)}</strong>
                  <button onClick={() => removerItem(item.id)}>
                    <Trash size={16} /> Remover
                  </button>
                </div>
              ))
            )}
          </TotalValues>
          <button>Confirmar pedido</button>
        </section>
        
      </PedidoContent>
    </Container>
  );
};
