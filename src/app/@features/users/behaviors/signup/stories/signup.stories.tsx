import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {SignupForm} from '../forms/SignupForm';
import {FeatureList} from '@services/features/list/components/FeatureList';

export default {
  title:      'Admin/User/Signup',
  component:  SignupForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'projects']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = () => <SignupForm />;
export const Signup                               = Template.bind({});
Signup.args                                       = {};
