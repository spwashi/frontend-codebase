import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../stories/util/decorators';
import {Features} from '../../index';
import {CreateProjectForm} from '../behaviors/create';

export default {
    title:      'Admin/Forms/Datatypes/Project/CreateProject',
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