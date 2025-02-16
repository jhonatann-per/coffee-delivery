import styled from "styled-components";

export const Container = styled.div`
    max-width: 72.5rem;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        width: 40rem;
        display: flex;
        flex-direction: column;
        gap: 16px;
        
    }
    section {
        width: 100%;
        height: 372px;
        background-color: ${({theme}) => theme.colors['base-card']};
        border-radius: 4px;
        padding: 5rem;
        
    }

    article {
        width: 100%;
        height: 207px;
        background-color: ${({theme}) => theme.colors['base-card']};
        border-radius: 4px;
        padding: 5rem;
    }

    aside {
        width: 28rem;
        height: 498px;
        background-color: ${({theme}) => theme.colors['base-card']};
        border-radius: 4px;
        padding: 5rem;
    }
`;