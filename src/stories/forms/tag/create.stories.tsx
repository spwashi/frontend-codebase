import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../decorators';
import {Features} from '../../../features';
import {RestrictedCreateTagForm} from '../../../features/tags/behaviors/create';

export default {
    title:      'Forms/DataTypes/Tag/CreateTag',
    component:  RestrictedCreateTagForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'tags']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof RestrictedCreateTagForm>;

const Template: ComponentStory<typeof RestrictedCreateTagForm> = (args) => <RestrictedCreateTagForm {...args}/>;

export const CreateTag = Template.bind({});
CreateTag.args         = {};