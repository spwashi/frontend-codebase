import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {CreateSceneFormFeature} from '../index';
import {FeatureList} from '@services/features/list/components/FeatureList';

export default {
  title:      'Admin/Scene/CreateScene',
  component:  CreateSceneFormFeature,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'scenes']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof CreateSceneFormFeature>;

const Template: ComponentStory<typeof CreateSceneFormFeature> = () => <CreateSceneFormFeature />;

export const CreateScene = Template.bind({});
CreateScene.args         = {};