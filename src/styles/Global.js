import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    --color-font: ${props=>props.theme.colorFont};
    @font-face {
        font-family: "Roboto";
        font-style: regular;
        font-weight: 400;
        src:
        url("./../fonts/roboto-regular-webfont.woff2") format('woff2'),
        url('./../fonts/roboto-regular-webfont.woff') format('woff');
    }
    @font-face {
        font-family: "Roboto";
        font-weight: 700;
        src:
        url('./../fonts/roboto-bold-webfont.woff2') format('woff2'),
        url('./../fonts/roboto-bold-webfont.woff') format('woff');
    }
    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 400;
        src:
        url('./../fonts/roboto-italic-webfont.woff2') format('woff2'),
        url('./../fonts/roboto-italic-webfont.woff') format('woff');
    }
    html {
        font-size: 10px;
    }
    body {
        font-family: "Roboto", Verdana, sans-serif;
        font-size: 1.6rem;
        color: rgb(var(--color-font));
        line-height:1.5;
    }
`

export default GlobalStyle;