import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {TagEventFormFeature} from '../index';
import {FeatureList} from '@services/features/list/components/FeatureList';


export default {
  title:      'Admin/Event/TagEvent',
  component:  TagEventFormFeature,
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
} as ComponentMeta<typeof TagEventFormFeature>;

const Template: ComponentStory<typeof TagEventFormFeature> = () => <TagEventFormFeature />;

export const TagEvent = Template.bind({});
TagEvent.args         = {};
