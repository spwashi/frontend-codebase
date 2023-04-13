import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../../_services/storybook/decorators';
import {RestrictedEditEventForm} from '../../edit';
import {FeatureList} from '../../../../../_services/features/components/FeatureList';

export default {
  title:      'Admin/Forms/Datatypes/Event/EditEvent',
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

const Template: ComponentStory<typeof RestrictedEditEventForm> = (args) => <RestrictedEditEventForm {...args}/>;

export const EditEvent = Template.bind({});
EditEvent.args         = {};