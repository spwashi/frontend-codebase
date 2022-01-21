import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../decorators';
import {CreateConceptForm} from '../../../features/concepts/behaviors/create';
import {Features} from '../../../features';
import {UploadFileForm} from '../../../features/files/behaviors/upload/components/form/Form';

export default {
    title:      'Forms/DataTypes/File/UploadFile',
    component:  CreateConceptForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'files']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof CreateConceptForm>;

const Template: ComponentStory<typeof CreateConceptForm> = (args) => <UploadFileForm {...args}/>;

export const UploadFile = Template.bind({});
UploadFile.args         = {};