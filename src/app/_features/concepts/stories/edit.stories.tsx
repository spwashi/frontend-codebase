import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../_services/storybook/decorators';
import {CreateConceptForm} from '../.behaviors/create';
import {FeatureList} from '../../../_services/features/components/FeatureList';

export default {
  title:      'Admin/Forms/Datatypes/Concept/CreateConcept',
  component:  CreateConceptForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'concepts']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof CreateConceptForm>;

const Template: ComponentStory<typeof CreateConceptForm> = (args) => <CreateConceptForm {...args}/>;

export const CreateConcept = Template.bind({});
CreateConcept.args         = {};