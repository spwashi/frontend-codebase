import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {RestrictedTagConceptForm} from '../index';
import {FeatureList} from '@services/features/list/components/FeatureList';


export default {
  title:      'Admin/Concept/TagConcept',
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

const Template: ComponentStory<typeof RestrictedTagConceptForm> = () => <RestrictedTagConceptForm />;

export const TagConcept = Template.bind({});
TagConcept.args         = {};
