import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Container, Aside } from "./styles"
import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <Container>
            <Link to="/">vai</Link>
            <Aside>
                <div>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </div>
            </Aside>
        </Container>
    )
}