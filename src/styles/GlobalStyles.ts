import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: "Roboto", sans-serif;
    }
    body {
        background: #2E2E2E;
        padding-bottom: 40px;
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
    @media (max-width: 768px) {
        .d-flex {
            flex-direction: column;
        }
    }

    input:focus,
    input:active {
        outline: none;
        box-shadow: none;
        text-indent: 5px;
    }
`;

export default GlobalStyles;
