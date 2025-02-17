import { Container, EnderecoForm, PedidoContent } from "./styles"

export const Carrinho = () => {
    return(
        <Container>
            <EnderecoForm>
                <header>Complete seu pedido</header>
                <section>
                    <div>
                        <p>Endereço de Entrega</p>
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                    <form>
                            <input type="number" name="cep" placeholder="CEP" />
                            <input type="text" name="rua" placeholder="Rua" />
                            <input type="number" name="numero" placeholder="Número" />
                            <input type="text" name="complemento" placeholder="Complemento" />
                            <input type="text" name="bairro" placeholder="Bairro" />
                            <input type="text" name="cidade" placeholder="Cidade" />
                            <input type="text" name="uf" placeholder="UF" />
                    </form>
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
                    <div>Produtos do carrinho</div>
                    <div>
                        <div>
                            <p>Total de itens</p>
                        </div>
                        <div>
                            <p>Entrega</p>
                        </div>
                        <div>
                            <strong>Total</strong>
                        </div>
                    </div>
                    <button>Confirmar pedido</button>
                </section>
            </PedidoContent>
            
        </Container>
    )
}