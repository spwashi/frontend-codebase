import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../stories/_util/decorators';
import {RestrictedTagConceptForm} from '../../concepts/behaviors/tag';
import {Features} from '../../index';
import { TagDisplay } from '../components/display';


export default {
    title:      'Admin/Forms/Tag/DisplayTag',
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
