import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../decorators';
import {Features} from '../../../features';
import {CreateProjectForm} from '../../../features/projects/behaviors/create';

export default {
    title:      'Forms/DataTypes/Project/CreateProject',
    component:  CreateProjectForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['projects']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof CreateProjectForm>;

const Template: ComponentStory<typeof CreateProjectForm> = (args) => <CreateProjectForm {...args}/>;

export const CreateProject = Template.bind({});
CreateProject.args         = {};