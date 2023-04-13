import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../_services/storybook/decorators';
import {FeatureList} from '../../../_services/features/components/FeatureList';
import {CreateProjectForm} from '../_behaviors/create';

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

const Template: ComponentStory<typeof CreateProjectForm> = (args) => <CreateProjectForm {...args}/>;

export const CreateProject = Template.bind({});
CreateProject.args         = {};