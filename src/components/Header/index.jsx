import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Container, Aside } from "./styles"
import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import { useCarrinho } from "../../contexts/CarrinhoContext";

export const Header = () => {
    const {itens} = useCarrinho()
    
    const quantidadeItens = itens.reduce((total, item) => total + item.quantidade, 0);

    return(
        <Container>
            <Link to="/">
                <img src={Logo} key="Logo" alt="Coffee Delivery"/>
            </Link>

            <Aside>
                <div>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </div>
                <Link>
                    <ShoppingCart size={22} weight="fill"/>
                    {quantidadeItens > 0 && (
                        <span>{quantidadeItens}</span>
                    )}
                </Link>
            </Aside>

        </Container>
    )
}