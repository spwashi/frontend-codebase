import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {RestrictedEditConceptForm} from '../../edit';
import {FeatureList} from '@services/features/components/FeatureList';

export default {
  title:      'Admin/Concept/EditConcept',
  component:  RestrictedEditConceptForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'concepts']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof RestrictedEditConceptForm>;

const Template: ComponentStory<typeof RestrictedEditConceptForm> = () => <RestrictedEditConceptForm />;

export const EditConcept = Template.bind({});
EditConcept.args         = {};