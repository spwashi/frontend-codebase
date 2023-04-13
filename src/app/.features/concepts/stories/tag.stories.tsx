import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../.services/.storybook/decorators';
import {RestrictedTagConceptForm} from '../.behaviors/tag';
import {FeatureList} from '../../../.services/.features/components/FeatureList';


export default {
  title:      'Admin/Forms/Datatypes/Concept/TagConcept',
  component:  RestrictedTagConceptForm,
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
} as ComponentMeta<typeof RestrictedTagConceptForm>;

const Template: ComponentStory<typeof RestrictedTagConceptForm> = (args) => <RestrictedTagConceptForm {...args}/>;

export const TagConcept = Template.bind({});
TagConcept.args         = {};
