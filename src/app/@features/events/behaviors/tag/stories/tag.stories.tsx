import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {RestrictedTagEventForm} from '../index';
import {FeatureList} from '@services/features/components/FeatureList';


export default {
  title:      'Admin/Event/TagEvent',
  component:  RestrictedTagEventForm,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <FeatureList list={['users', 'tags', 'events']}/>
          <Story/>
        </React.Fragment>
      );
    },
    mainDecorator,
  ],
} as ComponentMeta<typeof RestrictedTagEventForm>;

const Template: ComponentStory<typeof RestrictedTagEventForm> = () => <RestrictedTagEventForm />;

export const TagEvent = Template.bind({});
TagEvent.args         = {};
