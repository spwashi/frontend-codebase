import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {EditConceptFormFeature} from '../../edit';
import {FeatureList} from '@services/features/list/components/FeatureList';

export default {
  title:      'Admin/Concept/EditConcept',
  component:  EditConceptFormFeature,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'concepts']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof EditConceptFormFeature>;

const Template: ComponentStory<typeof EditConceptFormFeature> = () => <EditConceptFormFeature />;

export const EditConcept = Template.bind({});
EditConcept.args         = {};