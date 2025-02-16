import styled from "styled-components";
import { mixFonts } from "../../styles/mixFonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    header {
        width: 100%;
    }

    section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 2rem;
        row-gap: 3rem;
        margin-top: 6rem;

    }
`;

export const CoffeesVitrines = styled.div`
    width: 16rem;
    height: 310px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors['base-card']};
    border-radius: 5px 20px 5px 20px;

    h2 {
        padding: 8px 1rem;
        font-size: ${mixFonts.fonts.titleS}
    }
    p {
        text-align: center;
        font-size: ${mixFonts.fonts.textS};
        color: ${({theme}) => theme.colors['base-label']};
        padding: 8px 1rem;
    }
    
`


export const Tags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
    padding: 10px;

        span {
            padding: 4px 8px;
            border-radius: 16px;
            font-size: 0.875rem;
            font-weight: bold;
            background-color: ${({theme}) => theme.colors['yellow-light']};
            color: ${({theme}) => theme.colors['yellow-dark']} 
    }
`;



export const SelectContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        background: ${({theme}) => theme.colors['base-button']};
        height: 38px;
        border-radius: 5px;
        gap: 0.65rem;

        button {
            background: ${({theme}) => theme.colors['base-button']};
            color: ${({theme}) => theme.colors.purple}
        }
    }

    button {
        background: ${({theme}) => theme.colors['purple-dark']};
        border-radius: 5px;
        width: 38px;
        height: 38px;
        color: white;
    }

    
`;
