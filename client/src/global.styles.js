import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 0
        }
    }

    a {
        text-decoration: none;
        color: black;
    }
`;
