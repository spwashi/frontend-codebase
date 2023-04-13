import type {StorybookConfig} from '@storybook/react-vite';

let config: StorybookConfig = {
  stories:    ['../.docs/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|md|mdx)'],
  addons:     ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  framework:  {
    name:    '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  docs:       {
    autodocs: 'tag',
  },
};
export default config;