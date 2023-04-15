import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FeatureList} from '@services/features/list/components/FeatureList';
import {CreateTagFormFeature} from '../index';

export default {
  title:      'Admin/Tag/CreateTag',
  component:  CreateTagFormFeature,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'tags']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof CreateTagFormFeature>;

const Template: ComponentStory<typeof CreateTagFormFeature> = (args) => <CreateTagFormFeature />;

export const CreateTag = Template.bind({});
CreateTag.args         = {};