import {createGlobalStyle} from 'styled-components';

export const RootCss = createGlobalStyle`
    :root {
        --error-text-color: red;
        --error-font-family: 'JetBrains Mono', monospace;
        
        --form-input-wrapper-margin: 0;
        --form-input-margin: 0;
        --form-border-color: yellow;
    }
`;