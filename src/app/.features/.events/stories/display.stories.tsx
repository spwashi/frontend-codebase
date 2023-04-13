import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../util/storybook/decorators';
import {FeatureList} from '../../../.services/.features/components/FeatureList';
import {EventDisplayForm} from '../components/display/DisplayForm';


export default {
  title:      'Admin/Forms/Datatypes/Event/DisplayEvent',
  component:  EventDisplayForm,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <FeatureList list={['users', 'events']}/>
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
