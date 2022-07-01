import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 700;
    padding: 15px 60px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#333'};
    transition: all .15s ease-in-out;

    &:hover {
        opacity: .6;
        transform: scale(0.97);
    }
`