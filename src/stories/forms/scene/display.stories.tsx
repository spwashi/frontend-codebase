import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../_util/decorators';
import {Features} from '../../../features';
import {SceneDisplayForm} from '../../../features/scenes/components/display/DisplayForm';


export default {
    title:      'Admin/Forms/Scene/DisplayScene',
    component:  SceneDisplayForm,
    decorators: [
        (Story) => {
            return (
                <React.Fragment>
                    <Features list={['users', 'scenes']}/>
                    <Story/>
                </React.Fragment>
            );
        },
        mainDecorator,
    ],
} as ComponentMeta<typeof SceneDisplayForm>;

const Template: ComponentStory<typeof SceneDisplayForm> = (args) => <SceneDisplayForm {...args}/>;

export const DisplayScene = Template.bind({});
DisplayScene.args         = {};
