import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: "Roboto", sans-serif;
    }
    body {
        background: #2E2E2E;
    }
    ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    .d-flex {
        display: flex;
    }

    input:focus,
    input:active {
        outline: none;
        box-shadow: none;
        text-indent: 5px;
    }
`;

export default GlobalStyles;
