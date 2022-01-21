import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../decorators';
import {RestrictedTagConceptForm} from '../../../features/concepts/behaviors/tag';
import {Features} from '../../../features';
import { TagDisplay } from '../../../features/tags/components/display';


export default {
    title:      'Forms/DataTypes/Tag/DisplayTag',
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
} as ComponentMeta<typeof RestrictedTagConceptForm>;

const Template: ComponentStory<typeof RestrictedTagConceptForm> = (args) => <TagDisplay {...args}/>;

export const DisplayTag = Template.bind({});
DisplayTag.args         = {};
