import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../stories/util/decorators';
import {RestrictedCreateSceneForm} from '../behaviors/create';
import {Features} from '../../index';

export default {
    title:      'Admin/Forms/Datatypes/Scene/CreateScene',
    component:  RestrictedCreateSceneForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'scenes']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof RestrictedCreateSceneForm>;

const Template: ComponentStory<typeof RestrictedCreateSceneForm> = (args) => <RestrictedCreateSceneForm {...args}/>;

export const CreateScene = Template.bind({});
CreateScene.args         = {};