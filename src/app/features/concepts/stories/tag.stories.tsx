import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../stories/util/decorators';
import {RestrictedTagConceptForm} from '../behaviors/tag';
import {Features} from '../../index';


export default {
  title:      'Admin/Forms/Datatypes/Concept/TagConcept',
  component:  RestrictedTagConceptForm,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <Features list={['users', 'tags', 'concepts']}/>
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
