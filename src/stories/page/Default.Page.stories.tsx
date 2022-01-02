import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Page} from '../../components/page/Page';
import * as HeaderStories from '../header/Header.stories';

export default {
    title:     'Pages/Default',
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args         = {...HeaderStories.LoggedIn.args};

export const LoggedOut = Template.bind({});
LoggedOut.args         = {...HeaderStories.LoggedOut.args};
