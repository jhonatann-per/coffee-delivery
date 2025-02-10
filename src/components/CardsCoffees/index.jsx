import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "./styles"

export const CardsCoffees = () => {
    const [coffes, setCoffes] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3001/cafes')
        .then(response => {
            setCoffes(response.data);
        })
        .catch(error => {
            console.error("Erro dados não encontrado:", error)
        })

    }, []);


    return(
        <Container>
            <header>
                <h1>Nossos Cafés</h1>
            </header>
            <section>
                {coffes.map(coffe => (
                    <div key={coffe.id}>
                        <h2>{coffe.nome}</h2>
                        <p>{coffe.descricao}</p>
                    </div>
                ))}
            </section>
        </Container>
    )
}