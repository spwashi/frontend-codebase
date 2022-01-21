import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../_util/decorators';
import {Features} from '../../../features';
import {ProjectDisplay} from '../../../features/projects/components/display';


export default {
    title:      'Admin/Forms/Project/DisplayProject',
    component:  ProjectDisplay,
    decorators: [
        (Story) => {
            return (
                <React.Fragment>
                    <Features list={['users', 'tags', 'concepts']}/>
                    <Story/>
                </React.Fragment>
            );
        },
        mainDecorator,
    ],
} as ComponentMeta<typeof ProjectDisplay>;

const Template: ComponentStory<typeof ProjectDisplay> = (args) => <ProjectDisplay {...args}/>;

export const DisplayProject = Template.bind({});
DisplayProject.args         = {};
