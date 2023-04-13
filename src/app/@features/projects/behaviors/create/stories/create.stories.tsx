import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FeatureList} from '@services/features/components/FeatureList';
import {CreateProjectForm} from '../index';

export default {
  title:      'Admin/Forms/Datatypes/Project/CreateProject',
  component:  CreateProjectForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['projects']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof CreateProjectForm>;

const Template: ComponentStory<typeof CreateProjectForm> = () => <CreateProjectForm />;

export const CreateProject = Template.bind({});
CreateProject.args         = {};