import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FeatureList} from '@services/features/list/components/FeatureList';
import {EventDisplayFormFeature} from '../components/Form';


export default {
  title:      'Admin/Event/DisplayEvent',
  component:  EventDisplayFormFeature,
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
} as ComponentMeta<typeof EventDisplayFormFeature>;

const Template: ComponentStory<typeof EventDisplayFormFeature> = () => <EventDisplayFormFeature />;

export const DisplayEvent = Template.bind({});
DisplayEvent.args         = {};
