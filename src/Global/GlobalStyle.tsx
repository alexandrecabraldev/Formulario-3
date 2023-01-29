import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props=>props.theme.bodyBackgroundColor};
    }

    h1,h2, button{
        font-family: 'Staatliches', sans-serif;
        font-weight: 400;
    }

    label, span{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    label{
        font-size: 0.875rem;
    }

    span{
        font-size: 0.75rem;
    }

`;

