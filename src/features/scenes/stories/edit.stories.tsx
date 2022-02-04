import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../stories/_util/decorators';
import {RestrictedEditSceneForm} from '../behaviors/edit';
import {Features} from '../../index';

export default {
    title:      'Admin/Forms/Scene/EditScene',
    component:  RestrictedEditSceneForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'scenes']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof RestrictedEditSceneForm>;

const Template: ComponentStory<typeof RestrictedEditSceneForm> = (args) => <RestrictedEditSceneForm {...args}/>;

export const EditScene = Template.bind({});
EditScene.args         = {};