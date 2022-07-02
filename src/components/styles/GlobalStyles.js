import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({theme}) => theme.colors.fontColor};
        font-family: 'Poppins', sans-serif;
        margin: 0;
    }

    p {
        opacity: 0.5;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export default GlobalStyles
