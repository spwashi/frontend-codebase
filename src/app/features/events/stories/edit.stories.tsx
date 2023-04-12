import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../stories/util/decorators';
import {CreateEventForm} from '../behaviors/create';
import {Features} from '../../index';

export default {
  title:      'Admin/Forms/Datatypes/Event/CreateEvent',
  component:  CreateEventForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <Features list={['users', 'events']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof CreateEventForm>;

const Template: ComponentStory<typeof CreateEventForm> = (args) => <CreateEventForm {...args}/>;

export const CreateEvent = Template.bind({});
CreateEvent.args         = {};