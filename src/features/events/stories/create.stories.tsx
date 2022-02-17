import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../stories/_util/decorators';
import {RestrictedEditEventForm} from '../behaviors/edit';
import {Features} from '../../index';

export default {
    title:      'Admin/Forms/Datatypes/Event/EditEvent',
    component:  RestrictedEditEventForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'events']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof RestrictedEditEventForm>;

const Template: ComponentStory<typeof RestrictedEditEventForm> = (args) => <RestrictedEditEventForm {...args}/>;

export const EditEvent = Template.bind({});
EditEvent.args         = {};