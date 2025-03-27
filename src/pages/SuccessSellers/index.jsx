import { Container, OrderInformation } from "./styles";
import Entregador from "../../assets/Entregador.svg";
export const SuccessSellers = () => {
    return (
        <Container>
            <section>
                <header>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </header>
                <OrderInformation>
                    <div>
                        <span>Entrega em</span>
                        <p>Rua João Daniel Martinelli, 102</p>
                    </div>
                    <div>
                        <span>Previsão de entrega</span>
                        <p>20 min - 30 min</p>
                    </div>
                    <div>
                        <span>Pagamento na entrega</span>
                        <p>Cartão de Crédito</p>
                    </div>
                </OrderInformation>
            </section>
            <aside>
                <img src={Entregador} alt="Entregador de moto" />
            </aside>
        </Container>
    );
};