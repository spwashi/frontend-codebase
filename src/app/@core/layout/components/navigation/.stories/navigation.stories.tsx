import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Page} from '../../page/Page';
import {Navigation} from '../Navigation';
import {mainNavigation} from '@junction/routes/nav';

export default {
  title:     'Demo/Layout/Regions/Navigation',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Navigation items={mainNavigation}/>;

export const NavBar = Template.bind({});