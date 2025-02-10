import styled from "styled-components";


export const Container = styled.header`
    max-width: 72.5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 1rem;
    color: white;
    margin: 0 auto;
    border-bottom: 1px solid white;
`;

export const Aside = styled.aside`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
