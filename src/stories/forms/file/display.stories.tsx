import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../_util/decorators';
import {Features} from '../../../features';
import {FileDisplay} from '../../../features/files/components/display/FileDisplay';


export default {
    title:      'Admin/Forms/File/DisplayFile',
    component:  FileDisplay,
    decorators: [
        (Story) => {
            return (
                <React.Fragment>
                    <Features list={['users', 'concepts']}/>
                    <Story/>
                </React.Fragment>
            );
        },
        mainDecorator,
    ],
} as ComponentMeta<typeof FileDisplay>;

const Template: ComponentStory<typeof FileDisplay> = (args) => <FileDisplay {...args}/>;

export const DisplayFile = Template.bind({});
DisplayFile.args         = {};
