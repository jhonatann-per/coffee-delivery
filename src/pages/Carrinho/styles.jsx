import styled from "styled-components";
import { mixFonts } from "../../styles/mixFonts";

export const Container = styled.div`
    max-width: 72.5rem;
    margin: 0 auto;
    margin-top: 2.5rem;
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
       
        

    }

    article {
        width: 100%;
        height: 207px;
        background-color: ${({theme}) => theme.colors['base-card']};
        border-radius: 4px;
        padding: 2rem;

    }

    header {
        ${mixFonts.fonts.titleXS}
    }
`;

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 11.1rem;
  height: 2.87rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  text-transform: uppercase;
  border: 1px solid transparent;
  
  ${({ $isSelected, theme }) =>
    $isSelected &&
    `
      border: 1px solid ${theme.colors['purple']};
    `}
  
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors['purple']};
  }
`;


export const OptionPayment = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
`;

export const PaymentHeader = styled.header`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    div{
        width: 100%;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p{
            ${mixFonts.fonts.textM}
        }
        span{
           
            ${mixFonts.fonts.textS}
        }
    }
       
        
`
    

export const HeaderLocation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    div {
        width: 100%;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p{
            ${mixFonts.fonts.textM}
        }
        span{
            ${mixFonts.fonts.textS}
        }
        }
`;

export const FormDiv = styled.div`
    max-width: 35rem;
    display: flex;
    margin-top: 1rem;

    form {
            display: grid;
            grid-template-columns: repeat(3, minmax(100px, 1fr));
            gap: 16px;

            input:nth-child(1) {
                grid-column: 1 / span 1;
                height:2.5rem;
               
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }

            input:nth-child(2) {
                grid-column: 1 / span 3;
                height:2.5rem;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }

            input:nth-child(3) {
                grid-column: 1 / span 1;
                height:2.5rem;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }
            
            input:nth-child(4) {
                grid-column: 2 / span 2;
                height:2.5rem;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }
            
            input:nth-child(5) {
                grid-column: 1 / span 1;
                height:2.5rem;
                border-radius: 4px;
                padding-left: 1rem;
                border: 1px solid ${({theme}) => theme.colors['base-input']};
                color: ${({theme}) => theme.colors['base-text']};
            }
            
            input:nth-child(6) {
                grid-column: 2 / span 1;
                height:2.5rem;
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

export const CardItens = styled.div`
    display: flex;
    flex-direction: column;

    button {
        display: flex;
        transition: all 0.2s;
        background-color: transparent;
        text-align: center;
        padding: 0.25rem;
        color: ${({theme}) => theme.colors['purple']};
            &:hover {
                background-color: ${({ theme }) => theme.colors['base-hover']};
            }
    }
`;

export const ItemQuatitDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    width: 4.5rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors['base-button']};
    
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const RemoveItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    width: 5.6rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;

    span{
        font-size: 13px;
        color: ${({ theme }) => theme.colors['base-text']};
    }
`;

export const PedidoContent = styled.div`
        display: flex;
        flex-direction: column;
        width: 32rem;
        height: auto;
        gap: 1rem;

        section {
            height: auto;
            width: 100%;
            border-radius: 5px 25px 5px 25px ;
            background-color: ${({theme}) => theme.colors['base-card']};
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        header {
            ${mixFonts.fonts.titleXS}
        }
       
`;

export const CoffeesAddeds = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.colors['base-border']};
    height: 120px;
    width: 24rem;
    gap: 1rem;

    h3{
        width: 150px;
        ${mixFonts.fonts.textM}
    }

    header{
        width: 100%;
        display: flex;
        gap: 5rem;

        span{
            ${mixFonts.fonts.textM}
        }
    }
`;

export const TotalValues = styled.div`
    width: auto;
    width: 24rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }
   
`;

export const CofirmationButton = styled.button`
  background-color: ${({ theme, disabled }) => 
    disabled ? theme.colors['base-hover'] : theme.colors['yellow']};
  color: white;
  width: 100%;
  height: 2.87rem;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ theme, disabled }) => 
      disabled ? theme.colors['base-hover'] : theme.colors['yellow-dark']};
  }
  
  &:active {
    transform: ${({ disabled }) => disabled ? 'none' : 'scale(0.98)'};
  }
`;