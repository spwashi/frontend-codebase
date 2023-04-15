import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {EditEventFormFeature} from '../../edit';
import {FeatureList} from '@services/features/list/components/FeatureList';

export default {
  title:      'Admin/Event/EditEvent',
  component:  EditEventFormFeature,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'events']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof EditEventFormFeature>;

const Template: ComponentStory<typeof EditEventFormFeature> = (args) => <EditEventFormFeature />;

export const EditEvent = Template.bind({});
EditEvent.args         = {};