import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../.services/.storybook/decorators';
import {RestrictedTagConceptForm} from '../../concepts/.behaviors/tag';
import {FeatureList} from '../../../.services/.features/components/FeatureList';
import {TagsDisplayForm} from '../components/display';


export default {
  title:      'Admin/Forms/Datatypes/Tag/DisplayTag',
  component:  TagsDisplayForm,
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

const Template: ComponentStory<typeof RestrictedTagConceptForm> = (args) => <TagsDisplayForm {...args}/>;

export const DisplayTag = Template.bind({});
DisplayTag.args         = {};
