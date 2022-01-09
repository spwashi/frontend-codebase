import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../decorators';
import {Features} from '../../../features';
import {ConceptDisplay} from '../../../features/concepts/components/display';


export default {
    title:      'Forms/Concept/DisplayConcept',
    component:  ConceptDisplay,
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
} as ComponentMeta<typeof ConceptDisplay>;

const Template: ComponentStory<typeof ConceptDisplay> = (args) => <ConceptDisplay {...args}/>;

export const DisplayConcept = Template.bind({});
DisplayConcept.args         = {};
