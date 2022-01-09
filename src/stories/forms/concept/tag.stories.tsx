import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../decorators';
import {TagConceptForm} from '../../../features/concepts/behaviors/tag';
import {Features} from '../../../features';


export default {
    title:      'Forms/Concept/TagConcept',
    component:  TagConceptForm,
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
} as ComponentMeta<typeof TagConceptForm>;

const Template: ComponentStory<typeof TagConceptForm> = (args) => <TagConceptForm {...args}/>;

export const TagConcept = Template.bind({});
TagConcept.args         = {};
