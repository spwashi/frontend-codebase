import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FeatureList} from '@services/features/components/FeatureList';
import {SceneDisplayForm} from '../../../components/display/DisplayForm';


export default {
  title:      'Admin/Scene/DisplayScene',
  component:  SceneDisplayForm,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <FeatureList list={['users', 'scenes']}/>
          <Story/>
        </React.Fragment>
      );
    },
    mainDecorator,
  ],
} as ComponentMeta<typeof SceneDisplayForm>;

const Template: ComponentStory<typeof SceneDisplayForm> = () => <SceneDisplayForm />;

export const DisplayScene = Template.bind({});
DisplayScene.args         = {};
