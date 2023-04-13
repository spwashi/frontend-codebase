import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../util/storybook/decorators';
import {Features} from '../../index';
import {EventDisplayForm} from '../components/display/DisplayForm';


export default {
  title:      'Admin/Forms/Datatypes/Event/DisplayEvent',
  component:  EventDisplayForm,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <Features list={['users', 'events']}/>
          <Story/>
        </React.Fragment>
      );
    },
    mainDecorator,
  ],
} as ComponentMeta<typeof EventDisplayForm>;

const Template: ComponentStory<typeof EventDisplayForm> = (args) => <EventDisplayForm {...args}/>;

export const DisplayEvent = Template.bind({});
DisplayEvent.args         = {};
