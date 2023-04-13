import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../util/storybook/decorators';
import {CreateEventForm} from '../behaviors/create';
import {FeatureList} from '../../components/FeatureList';

export default {
  title:      'Admin/Forms/Datatypes/Event/CreateEvent',
  component:  CreateEventForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'events']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof CreateEventForm>;

const Template: ComponentStory<typeof CreateEventForm> = (args) => <CreateEventForm {...args}/>;

export const CreateEvent = Template.bind({});
CreateEvent.args         = {};