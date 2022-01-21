import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Logo as LogoComp} from '../../../components/layout/logo/Logo';

export default {
    title:     'Demo/Layout/Components/Logo',
    component: LogoComp,
} as ComponentMeta<typeof LogoComp>;

const Template: ComponentStory<typeof LogoComp> = (args) => <LogoComp/>;

export const Logo = Template.bind({});