import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {LoginForm} from '../../../features/users/behaviors/login/forms/LoginForm';
import {mainDecorator} from '../../_util/decorators';
import {LogoutButton} from '../../../features/users/behaviors/login/Logout';
import {Features} from '../../../features';

export default {
    title:      'Admin/Forms/User/Login',
    component:  LoginForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'projects']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args}/>;
export const Login                               = Template.bind({});
Login.args                                       = {alt: <LogoutButton/>};
