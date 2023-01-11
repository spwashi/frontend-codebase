// .storybook/YourTheme.js

import {create} from '@storybook/theming';

export default create(
  {
    base:       'light',
    brandTitle: '$APP_TITLE$',

    fontBase: '"Jetbrains Mono", "Open Sans", sans-serif',
    fontCode: 'monospace',

    brandUrl:   'https://example.com',
    brandImage: '/logo.svg',
    brandTarget: '_self',
  }
);