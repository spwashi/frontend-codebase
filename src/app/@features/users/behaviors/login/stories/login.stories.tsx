import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {LoginForm} from '../forms/LoginForm';
import {mainDecorator} from '@services/storybook/decorators';
import {LogoutButton} from '../components/Logout';
import {FeatureList} from '@services/features/list/components/FeatureList';

export default {
  title:      'Admin/User/Login',
  component:  LoginForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'projects']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args}/>;
export const Login                               = Template.bind({});
Login.args                                       = {alt: <LogoutButton/>};
