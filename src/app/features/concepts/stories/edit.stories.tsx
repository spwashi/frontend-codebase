import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../stories/util/decorators';
import {CreateConceptForm} from '../behaviors/create';
import {Features} from '../../index';

export default {
  title:      'Admin/Forms/Datatypes/Concept/CreateConcept',
  component:  CreateConceptForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <Features list={['users', 'concepts']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof CreateConceptForm>;

const Template: ComponentStory<typeof CreateConceptForm> = (args) => <CreateConceptForm {...args}/>;

export const CreateConcept = Template.bind({});
CreateConcept.args         = {};