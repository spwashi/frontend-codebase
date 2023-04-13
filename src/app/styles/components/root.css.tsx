import {createGlobalStyle} from 'styled-components';

export const RootCss = createGlobalStyle`
    :root {
        --error-text-color: red;
        --error-font-family: 'JetBrains Mono', monospace;
        --form-outline: thick solid red;
        --button-outline: none;
        --button-focus-outline: thick solid blue;
        --button-hover-outline: thick solid yellow;
        --input-wrapper-outline: none;
    }
`;