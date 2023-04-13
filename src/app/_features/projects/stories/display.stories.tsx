import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../_services/storybook/decorators';
import {FeatureList} from '../../../_services/features/components/FeatureList';
import {ProjectDisplayForm} from '../components/display';


export default {
  title:      'Admin/Forms/Datatypes/Project/DisplayProject',
  component:  ProjectDisplayForm,
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
} as ComponentMeta<typeof ProjectDisplayForm>;

const Template: ComponentStory<typeof ProjectDisplayForm> = () => <ProjectDisplayForm/>;

export const DisplayProject = Template.bind({});
DisplayProject.args         = {};
