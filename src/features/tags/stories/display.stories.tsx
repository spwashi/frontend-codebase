import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../stories/_util/decorators';
import {RestrictedTagConceptForm} from '../../concepts/behaviors/tag';
import {Features} from '../../index';
import {TagsDisplayForm} from '../components/display';


export default {
    title:      'Admin/Forms/Datatypes/Tag/DisplayTag',
    component:  TagsDisplayForm,
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

const Template: ComponentStory<typeof RestrictedTagConceptForm> = (args) => <TagsDisplayForm {...args}/>;

export const DisplayTag = Template.bind({});
DisplayTag.args         = {};
