import styled from "styled-components";


export const Container = styled.header`
    max-width: 72.5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin: 0 auto;
    border-bottom: 1px solid white;
`;

export const Aside = styled.aside`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({theme}) => theme.colors['purple']};
        background-color: ${({theme}) => theme.colors['purple-light']};
        padding: 0.5rem;
        border-radius: 4px;
        height: 38px;
    }

    button {
  width: 2.375rem;
  height: 38px;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background: ${({theme}) => theme.colors['yellow-light']};
  color: ${({theme}) => theme.colors['yellow-dark']};
  position: relative; 

  strong {
    background: ${({theme}) => theme.colors['yellow-dark']};
    color: white;
    text-decoration: none;
    position: absolute; 
    top: -15px;
    right: -12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%; 
    z-index: 1;
  }
}


    
    
`;

