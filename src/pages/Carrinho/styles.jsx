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
        gap: 1rem;
        
    
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

    }

    article {
        width: 100%;
        height: 207px;
        background-color: ${({theme}) => theme.colors['base-card']};
        border-radius: 4px;
        padding: 5rem;
    }
`;

export const FormDiv = styled.div`
    max-width: 35rem;
    display: flex;

    form {
            display: grid;
            grid-template-columns: repeat(3, minmax(100px, 1fr));
        
            input:nth-child(1) {
                grid-column: 1 / span 1;
                height:2.5rem;
                margin-bottom: 16px;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }

            input:nth-child(2) {
                grid-column: 1 / span 3;
                height:2.5rem;
                margin-bottom: 16px;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }

            input:nth-child(3) {
                grid-column: 1 / span 1;
                height:2.5rem;
                margin-bottom: 16px;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }
            
            input:nth-child(4) {
                grid-column: 2 / span 2;
                height:2.5rem;
                margin-bottom: 16px;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }
            
            input:nth-child(5) {
                grid-column: 1 / span 1;
                height:2.5rem;
                margin-bottom: 16px;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }
            
            input:nth-child(6) {
                grid-column: 2 / span 1;
                height:2.5rem;
                margin-bottom: 16px;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }
            
            input:nth-child(7) {
                grid-column: 3 / span 1;
                height:2.5rem;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }
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

export const TotalValues = styled.div`
    height: 92px;
    width: 23rem;
`;