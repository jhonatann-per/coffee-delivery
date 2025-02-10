import { Container, HomeContent, Presentation, CoffeeImg } from "./styles"
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import ImgCoffee from "../../assets/Imagem.svg"
import { useTheme } from "styled-components";
import { CardsCoffees } from "../../components/CardsCoffees";

const AntigensItens = [

    { icon: ShoppingCart, text: "Compra simples e segura", colorKey: 'yellow-dark'},
    { icon: Package, text: "Embalagem mantém o café intacto", colorKey: 'base-text' },
    { icon: Timer, text: "Entrega rápida e rastreada", colorKey: 'yellow'},
    { icon: Coffee, text: "O café chega fresquinho até você", colorKey: 'purple'}

];


export const Home = () => {
    const theme = useTheme();

    return(
        <Container>
            <HomeContent>
                <Presentation>
                    <header>
                        <strong>
                            Encontre o café perfeito <br></br>para qualquer hora do dia
                        </strong>
                        <span>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </span>
                    </header>
                    <section>
                        {AntigensItens.map((item, index) => (
                            <div key={index}>
                                <div style={{ backgroundColor: theme.colors[item.colorKey], padding: '0.5rem', borderRadius: '50%', color: "white" }}>
                                    <item.icon size={22} weight="fill" />
                                </div>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </section>
                </Presentation>
                <CoffeeImg>
                    <img src={ImgCoffee} alt="Copo de Café e grãos" />
                </CoffeeImg>

            </HomeContent>
            
            <CardsCoffees />
        </Container>
    )
}