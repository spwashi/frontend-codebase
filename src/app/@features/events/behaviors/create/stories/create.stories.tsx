import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {RestrictedEditEventForm} from '../../edit';
import {FeatureList} from '@services/features/components/FeatureList';

export default {
  title:      'Admin/Event/EditEvent',
  component:  RestrictedEditEventForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'events']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof RestrictedEditEventForm>;

const Template: ComponentStory<typeof RestrictedEditEventForm> = (args) => <RestrictedEditEventForm />;

export const EditEvent = Template.bind({});
EditEvent.args         = {};