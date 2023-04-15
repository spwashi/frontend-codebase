import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {CreateEventFormFeature} from '../../create';
import {FeatureList} from '@services/features/list/components/FeatureList';

export default {
  title:      'Admin/Event/CreateEvent',
  component:  CreateEventFormFeature,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'events']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof CreateEventFormFeature>;

const Template: ComponentStory<typeof CreateEventFormFeature> = (args) => <CreateEventFormFeature />;

export const CreateEvent = Template.bind({});
CreateEvent.args         = {};