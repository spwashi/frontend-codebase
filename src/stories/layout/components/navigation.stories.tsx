import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Page} from '../../../components/layout/page/Page';
import {Navigation} from '../../../components/layout/navigation/Navigation';
import {navLinks} from '../../../app/constants/navigation';

export default {
    title:     'Demo/Layout/Components/Navigation',
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Navigation items={navLinks}/>;

export const NavBar = Template.bind({});