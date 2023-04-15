import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {TagConceptFormFeature} from '../index';
import {FeatureList} from '@services/features/list/components/FeatureList';


export default {
  title:      'Admin/Concept/TagConcept',
  component:  TagConceptFormFeature,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <FeatureList list={['users', 'tags', 'concepts']}/>
          <Story/>
        </React.Fragment>
      );
    },
    mainDecorator,
  ],
} as ComponentMeta<typeof TagConceptFormFeature>;

const Template: ComponentStory<typeof TagConceptFormFeature> = () => <TagConceptFormFeature />;

export const TagConcept = Template.bind({});
TagConcept.args         = {};
