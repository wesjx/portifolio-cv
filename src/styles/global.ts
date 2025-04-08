import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['blue300']}
    }

    body {
        background: ${(props) => props.theme['blue400']} ;
        color: ${(props) => props.theme['blue100']};
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

`
