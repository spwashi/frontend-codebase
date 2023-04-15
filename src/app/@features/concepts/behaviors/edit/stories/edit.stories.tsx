import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {CreateConceptForm} from '../../create';
import {FeatureList} from '@services/features/list/components/FeatureList';

export default {
  title:      'Admin/Concept/CreateConcept',
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

const Template: ComponentStory<typeof CreateConceptForm> = () => <CreateConceptForm />;

export const CreateConcept = Template.bind({});
CreateConcept.args         = {};