import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --black: #FFFFF;
    --white: #FFFFFF;
    --gray: #9f9f9f;
    --middleGray: #e9e9e9;
    --lightGray: #f6f5f2;

    --green: #3b8132;
    --middleGreen: #5bb450;
    --lightGreen: #acd8a7;

    --roboto: 'Roboto', sans-serif;

    button {
        cursor: pointer;
    }

    ol, ul, li{
        list-style: none;
    }

    a {
        text-decoration: none;
        
    }

    a:visited {
    color: var(--black);
  }

}

`;
