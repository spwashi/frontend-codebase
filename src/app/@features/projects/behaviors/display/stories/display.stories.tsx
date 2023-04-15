import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FeatureList} from '@services/features/list/components/FeatureList';
import {ProjectDisplayFormFeature} from '../../../components/display';


export default {
  title:      'Admin/Project/DisplayProject',
  component:  ProjectDisplayFormFeature,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <FeatureList list={['projects']}/>
          <Story/>
        </React.Fragment>
      );
    },
    mainDecorator,
  ],
} as ComponentMeta<typeof ProjectDisplayFormFeature>;

const Template: ComponentStory<typeof ProjectDisplayFormFeature> = () => <ProjectDisplayFormFeature/>;

export const DisplayProject = Template.bind({});
DisplayProject.args         = {};
