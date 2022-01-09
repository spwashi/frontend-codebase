import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../decorators';
import {Features} from '../../../features';
import {CreateTagForm} from '../../../features/tags/behaviors/create';

export default {
    title:      'Forms/Tag/CreateTag',
    component:  CreateTagForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'tags']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof CreateTagForm>;

const Template: ComponentStory<typeof CreateTagForm> = (args) => <CreateTagForm {...args}/>;

export const CreateTag = Template.bind({});
CreateTag.args         = {};