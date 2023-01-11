import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Input} from '../Input';
import {mainDecorator} from '../../../../../stories/_util/decorators';
import {StandardForm} from '../../../Form';

export default {
    title:      'Demo/Layout/Forms/Components/Input',
    component:  Input,
    decorators: [(Story) => <StandardForm> <Story/> </StandardForm>, mainDecorator],
} as ComponentMeta<any>;

export const TextInput = ({args: {formKey: 'text'}})