import { Container, Presentation, CoffeeImg } from "./styles"
import ImgCoffee from "../../assets/Imagem.svg"
export const Home = () => {
    return(
        <Container>
            <Presentation>
                <header>
                    <strong>
                        Encontre o café perfeito para qualquer hora do dia
                    </strong>
                    <span>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </span>
                </header>
                <section>
                    <span>Compra simples e segura</span>
                    <span>Entrega rápida e rastreada</span>
                    <span>Embalagem mantém o café intacto</span>
                    <span>O café chega fresquinho até você</span>
                </section>
            </Presentation>
            <CoffeeImg>
                <img src={ImgCoffee} alt="Copo de Café e grãos" />
            </CoffeeImg>
        </Container>
    )
}