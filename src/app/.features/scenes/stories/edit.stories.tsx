import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../.services/.storybook/decorators';
import {RestrictedEditSceneForm} from '../.behaviors/edit';
import {FeatureList} from '../../../.services/.features/components/FeatureList';

export default {
  title:      'Admin/Forms/Datatypes/Scene/EditScene',
  component:  RestrictedEditSceneForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'scenes']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof RestrictedEditSceneForm>;

const Template: ComponentStory<typeof RestrictedEditSceneForm> = (args) => <RestrictedEditSceneForm {...args}/>;

export const EditScene = Template.bind({});
EditScene.args         = {};