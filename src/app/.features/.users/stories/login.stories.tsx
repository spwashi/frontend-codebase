import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {LoginForm} from '../.behaviors/login/forms/LoginForm';
import {mainDecorator} from '../../../util/storybook/decorators';
import {LogoutButton} from '../.behaviors/login/components/Logout';
import {FeatureList} from '../../../.services/.features/components/FeatureList';

export default {
  title:      'Admin/Forms/Datatypes/User/Login',
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
