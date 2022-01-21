import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../_util/decorators';
import {SignupForm} from '../../../features/users/behaviors/signup/forms/SignupForm';
import {Features} from '../../../features';

export default {
    title:      'Admin/Forms/User/Signup',
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
