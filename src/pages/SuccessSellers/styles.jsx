import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 72rem;
    margin: 0 auto;
    margin-top: 2.5rem;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;

`;

export const OrderInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    background-color: ${(props) => props.theme["base-card"]};
    border-radius: 6px 36px 6px 36px;
    width: 32.875rem;
    border: 1px solid ${(props) => props.theme["yellow-light"]};

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span {
            font-size: ${(props) => props.theme["text-m"]};
            color: ${(props) => props.theme["base-subtitle"]};
        }

        p {
            font-size: ${(props) => props.theme["text-m"]};
            color: ${(props) => props.theme["base-text"]};
        }
    }
`;