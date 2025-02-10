import styled from "styled-components";

export const Container = styled.div`
    max-width: 72.5rem;
    margin: 0 auto;
    padding: 0.5rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Presentation = styled.article`
    

    strong {
        font-size: 2rem;
    }

    section{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        margin-top: 5rem;
    }

    section span {
        margin-bottom: 0.5rem;
    }
`;

export const CoffeeImg = styled.aside`
    width: auto;
`;