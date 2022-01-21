import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../_util/decorators';
import {EditSceneForm} from '../../../features/scenes/behaviors/edit';
import {Features} from '../../../features';

export default {
    title:      'Admin/Forms/Scene/EditScene',
    component:  EditSceneForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'scenes']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof EditSceneForm>;

const Template: ComponentStory<typeof EditSceneForm> = (args) => <EditSceneForm {...args}/>;

export const EditScene = Template.bind({});
EditScene.args         = {};