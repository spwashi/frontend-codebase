import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../util/storybook/decorators';
import {SignupForm} from '../behaviors/signup/forms/SignupForm';
import {Features} from '../../index';

export default {
  title:      'Admin/Forms/Datatypes/User/Signup',
  component:  SignupForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <Features list={['users', 'projects']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = (args) => <SignupForm {...args}/>;
export const Signup                               = Template.bind({});
Signup.args                                       = {};
