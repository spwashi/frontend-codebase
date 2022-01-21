import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../_util/decorators';
import {CreateSceneForm} from '../../../features/scenes/behaviors/create';
import {Features} from '../../../features';

export default {
    title:      'Admin/Forms/Scene/CreateScene',
    component:  CreateSceneForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'scenes']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof CreateSceneForm>;

const Template: ComponentStory<typeof CreateSceneForm> = (args) => <CreateSceneForm {...args}/>;

export const CreateScene = Template.bind({});
CreateScene.args         = {};