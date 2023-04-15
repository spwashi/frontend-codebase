import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FeatureList} from '@services/features/components/FeatureList';
import {ConceptDisplayForm} from '../../../components/display/DisplayForm';


export default {
  title:      'Admin/Concept/DisplayConcept',
  component:  ConceptDisplayForm,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <FeatureList list={['users', 'concepts']}/>
          <Story/>
        </React.Fragment>
      );
    },
    mainDecorator,
  ],
} as ComponentMeta<typeof ConceptDisplayForm>;

const Template: ComponentStory<typeof ConceptDisplayForm> = (args) => <ConceptDisplayForm />;

export const DisplayConcept = Template.bind({});
DisplayConcept.args         = {};
