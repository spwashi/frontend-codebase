import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../decorators';
import {TagConceptForm} from '../../../features/concepts/behaviors/tag';
import {Features} from '../../../features';
import { TagDisplay } from '../../../features/tags/components/display';


export default {
    title:      'Forms/Tag/DisplayTag',
    component:  TagDisplay,
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

const Template: ComponentStory<typeof TagConceptForm> = (args) => <TagDisplay {...args}/>;

export const DisplayTag = Template.bind({});
DisplayTag.args         = {};
