import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../stories/_util/decorators';
import {RestrictedEditConceptForm} from '../behaviors/edit';
import {Features} from '../../index';

export default {
    title:      'Admin/Forms/Datatypes/Concept/EditConcept',
    component:  RestrictedEditConceptForm,
    decorators: [
        (Story) =>
            <React.Fragment>
                <Features list={['users', 'concepts']}/>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<typeof RestrictedEditConceptForm>;

const Template: ComponentStory<typeof RestrictedEditConceptForm> = (args) => <RestrictedEditConceptForm {...args}/>;

export const EditConcept = Template.bind({});
EditConcept.args         = {};