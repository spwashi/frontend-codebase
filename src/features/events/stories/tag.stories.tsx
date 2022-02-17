import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../stories/_util/decorators';
import {RestrictedTagEventForm} from '../behaviors/tag';
import {Features} from '../../index';


export default {
    title:      'Admin/Forms/Datatypes/Event/TagEvent',
    component:  RestrictedTagEventForm,
    decorators: [
        (Story) => {
            return (
                <React.Fragment>
                    <Features list={['users', 'tags', 'events']}/>
                    <Story/>
                </React.Fragment>
            );
        },
        mainDecorator,
    ],
} as ComponentMeta<typeof RestrictedTagEventForm>;

const Template: ComponentStory<typeof RestrictedTagEventForm> = (args) => <RestrictedTagEventForm {...args}/>;

export const TagEvent = Template.bind({});
TagEvent.args         = {};
