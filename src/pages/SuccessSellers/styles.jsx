import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 72rem;
    margin: 0 auto;
    margin-top: 2.5rem;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;

    header {
        margin-bottom: 2rem;
    }

`;

export const OrderInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    width: 32.875rem;
    height: 16.875rem;
    background-color: white;
    
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        

        section{
            gap: 0.5rem;
            display: flex;
            flex-direction: row;
        }

        span {
            font-size: ${(props) => props.theme["text-m"]};
            color: ${(props) => props.theme["base-subtitle"]};
        }

        p {
            width:auto;
            font-size: ${(props) => props.theme["text-m"]};
            color: ${(props) => props.theme["base-text"]};
        }
    }
`;

export const Info = styled.div`
    border: 1px solid;
    border-radius: 6px 36px;
    width: 100%;
    height: 100%;
    border-color: transparent;
    background-origin: border-box;
    background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
`;