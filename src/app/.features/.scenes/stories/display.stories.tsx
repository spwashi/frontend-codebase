import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../util/storybook/decorators';
import {FeatureList} from '../../components/FeatureList';
import {SceneDisplayForm} from '../components/display/DisplayForm';


export default {
  title:      'Admin/Forms/Datatypes/Scene/DisplayScene',
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

const Template: ComponentStory<typeof SceneDisplayForm> = (args) => <SceneDisplayForm {...args}/>;

export const DisplayScene = Template.bind({});
DisplayScene.args         = {};
