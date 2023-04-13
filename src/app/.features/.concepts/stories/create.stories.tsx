import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../util/storybook/decorators';
import {RestrictedEditConceptForm} from '../behaviors/edit';
import {FeatureList} from '../../components/FeatureList';

export default {
  title:      'Admin/Forms/Datatypes/Concept/EditConcept',
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

const Template: ComponentStory<typeof RestrictedEditConceptForm> = (args) => <RestrictedEditConceptForm {...args}/>;

export const EditConcept = Template.bind({});
EditConcept.args         = {};