import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
        line-height: inherit;
        font-weight: inherit;
        margin: 0;
    }

    a {
        background-color: transparent;
        text-decoration: none;
        color: inherit;
    }

    img {
        vertical-align: bottom;
    }

    button {
        vertical-align: middle;
        overflow: visible;
        text-transform: none;
        cursor: pointer;
    }
`;