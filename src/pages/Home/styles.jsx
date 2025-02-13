import styled from "styled-components";
import { mixFonts } from "../../styles/mixFonts";

export const Container = styled.div`
    max-width: 72.5rem;
    margin: 0 auto;
    
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HomeContent = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    
`;

export const Presentation = styled.article`
    width: 60%;
    
    header{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        strong {
            ${mixFonts.fonts.titleXL}
            color: ${({ theme }) => theme.colors['base-title']}
        }

        span {
            ${mixFonts.fonts.textL}
        }
    }

    

    section{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        margin-top: 4.5rem;
    }
    
    div {
        gap: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }

`;

export const CoffeeImg = styled.aside`
    width: auto;
`;