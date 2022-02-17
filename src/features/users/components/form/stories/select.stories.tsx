import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../stories/_util/decorators';
import {StandardForm} from '../../../../../components/form/Form';
import {UserSelect} from '../Select';

export default {
    title:      'Demo/Layout/Forms/Components/UserSelect',
    component:  UserSelect,
    decorators: [(Story) => <StandardForm> <Story/> </StandardForm>, mainDecorator],
} as ComponentMeta<typeof UserSelect>;

export const Input = ({args: {formKey: 'user'}})