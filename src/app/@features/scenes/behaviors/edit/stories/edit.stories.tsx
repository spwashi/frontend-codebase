import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {EditSceneFormFeature} from '../index';
import {FeatureList} from '@services/features/list/components/FeatureList';

export default {
  title:      'Admin/Scene/EditScene',
  component:  EditSceneFormFeature,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'scenes']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof EditSceneFormFeature>;

const Template: ComponentStory<typeof EditSceneFormFeature> = (args) => <EditSceneFormFeature />;

export const EditScene = Template.bind({});
EditScene.args         = {};