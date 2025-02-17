import styled from "styled-components";

export const Container = styled.div`
    max-width: 72.5rem;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    gap: 2rem;

`;

export const EnderecoForm = styled.div`
        width: 40rem;
        display: flex;
        flex-direction: column;
        gap: 16px;
        
    
    section {
        width: 100%;
        height: 372px;
        background-color: ${({theme}) => theme.colors['base-card']};
        border-radius: 4px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
       
        div {
            width: 100%;
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        form {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;

            
            input:nth-child(1) {
                grid-column: 1 / span 1;
            }

            input:nth-child(2) {
                grid-column: 1 / span 3;
                width: 100%;
            }

            input:nth-child(3) {
                grid-column: 1 / span 1;
            }
            
            input:nth-child(4) {
                grid-column: 2 / span 2;
            }
            
            input:nth-child(5) {
                grid-column: 1 / span 1;
            }
            
            input:nth-child(6) {
                grid-column: 2 / span 1;
            }
            
            input:nth-child(7) {
                grid-column: 3 / span 1;
            }
        }
    }

    article {
        width: 100%;
        height: 207px;
        background-color: ${({theme}) => theme.colors['base-card']};
        border-radius: 4px;
        padding: 5rem;
    }
`;

export const PedidoContent = styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        
        
        section {
            width: 28rem;
            height: 498px;
            background-color: ${({theme}) => theme.colors['base-card']};
            border-radius: 4px;
            padding: 5rem;
        }
       
        
`;