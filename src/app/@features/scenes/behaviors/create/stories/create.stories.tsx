import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {RestrictedCreateSceneForm} from '../index';
import {FeatureList} from '@services/features/components/FeatureList';

export default {
  title:      'Admin/Forms/Datatypes/Scene/CreateScene',
  component:  RestrictedCreateSceneForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'scenes']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof RestrictedCreateSceneForm>;

const Template: ComponentStory<typeof RestrictedCreateSceneForm> = (args) => <RestrictedCreateSceneForm {...args}/>;

export const CreateScene = Template.bind({});
CreateScene.args         = {};