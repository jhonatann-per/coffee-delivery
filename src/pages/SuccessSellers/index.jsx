import { Container, OrderInformation, Info, Endereco, PrevisaoDeEntrega, MethodPayment, CircleIcon } from "./styles";
import Entregador from "../../assets/Entregador.svg";
import { useEndereco } from "../../contexts/EnderecoContext";
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
export const SuccessSellers = () => {
    const { endereco } = useEndereco();
    const pedidoSalvo = localStorage.getItem("PedidoConfirmado");
    const pedidoConfirmado = pedidoSalvo ? JSON.parse(pedidoSalvo) : null;

    console.log("Dados do pedido:", pedidoConfirmado);

    if (!pedidoConfirmado) {
        return <div>Erro: Pedido não encontrado. Volte à tela anterior.</div>;
    }

    const metodoPagamento = {
        credit: "Cartão de Crédito",
        debit: "Cartão de Débito",
        cash: "Dinheiro",
    }[pedidoConfirmado.payment] || "Método não especificado";

    return (
        <Container>
            <section>
                <header>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </header>
                <Info>
                    <OrderInformation>   
                    <Endereco>
                        <CircleIcon bgColor="#8047F8"><MapPin size={28}/></CircleIcon>
                        <article>
                            <section>
                                <span>Entrega em</span>
                                <p>
                                {endereco.rua}, {endereco.numero}
                                </p>
                                <strong>Rua {endereco.rua}</strong>
                            </section>
                            <section>
                                <p>{endereco.bairro} - {endereco.cidade}, {endereco.uf}</p>
                            </section>
                        </article>
                    </Endereco>
                            
                    <PrevisaoDeEntrega>
                        <CircleIcon bgColor="#DBAC2C"><Timer size={28}/></CircleIcon>
                        <article>
                            <span>Previsão de entrega</span>
                            <strong>20 min - 30 min</strong>
                        </article>
                    </PrevisaoDeEntrega>

                    <MethodPayment>
                        <CircleIcon bgColor="#C47F17"><CurrencyDollar size={28}/></CircleIcon>
                        <article>
                            <span>Pagamento na entrega</span>
                            <strong>{metodoPagamento}</strong>
                        </article>
                    </MethodPayment>  
                    </OrderInformation>
                </Info>
            </section>
            <aside>
                <img src={Entregador} alt="Entregador de moto" />
            </aside>
        </Container>
    );
};