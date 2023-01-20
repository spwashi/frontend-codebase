import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../../stories/util/decorators';
import {StandardForm} from '../../../Form';
import {Textarea} from '../Textarea';

export default {
    title:      'Demo/Layout/Components/Form/Textarea',
    component:  Textarea,
    decorators: [(Story) => <StandardForm> <Story/> </StandardForm>, mainDecorator],
} as ComponentMeta<any>;


export const LongTextInput = ({args: {formKey: 'text'}})