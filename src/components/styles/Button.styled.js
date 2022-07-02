import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 50px;
    font-family: inherit;
    font-size: .75rem;
    font-weight: 600;
    padding: 1.125rem 4rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#333'};
    transition: all .15s ease-in-out;

    &:hover {
        opacity: .6;
        transform: scale(0.97);
    }
`
