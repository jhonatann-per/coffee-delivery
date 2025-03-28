import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Container, Aside } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import { useEndereco } from '../../contexts/EnderecoContext';

export const Header = () => {
    const { itens } = useCarrinho();
    const { endereco } = useEndereco(); 

    const quantidadeItens = itens.reduce((total, item) => total + item.quantidade, 0);

    return (
        <Container>
            <Link to="/">
                <img src={Logo} key="Logo" alt="Coffee Delivery"/>
            </Link>

            <Aside>
                <div>
                    <MapPin size={22} weight="fill" color="#8047F8" />
                    <span>
                        {endereco.cidade ? `${endereco.cidade}, ${endereco.uf}` : "Selecione um endereço"}
                    </span>
                </div>
                <button>
                    <Link to="/carrinho">
                        <ShoppingCart size={22} weight="fill" style={{ color: '#C47F17' }} />
                        {quantidadeItens > 0 && (
                            <strong>{quantidadeItens}</strong>
                        )}
                    </Link>
                </button>
            </Aside>
        </Container>
    );
};
