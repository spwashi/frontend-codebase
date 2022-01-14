import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../decorators';
import {EditConceptForm} from '../../../features/concepts/behaviors/edit';
import {Features} from '../../../features';

export default {
    title:      'Forms/Concept/EditConcept',
    component:  EditConceptForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'concepts']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof EditConceptForm>;

const Template: ComponentStory<typeof EditConceptForm> = (args) => <EditConceptForm {...args}/>;

export const EditConcept = Template.bind({});
EditConcept.args         = {};