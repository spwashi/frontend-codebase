import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Logo as LogoComp} from '../../components/logo/Logo';

export default {
    title:     'Demo/Layout/Regions/Logo',
    component: LogoComp,
} as ComponentMeta<typeof LogoComp>;

const Template: ComponentStory<typeof LogoComp> = (args) => <LogoComp/>;

export const Logo = Template.bind({});