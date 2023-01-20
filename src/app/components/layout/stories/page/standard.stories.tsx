import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Page} from '../../components/page/Page';

export default {
    title:     'Demo/Layout/Pages/Basic',
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args}/>;

export const BasicPage = Template.bind({});