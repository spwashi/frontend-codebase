import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Input} from '../Input';
import {mainDecorator} from '../../../../../../../util/storybook/decorators';
import {FormWidget} from '../../../../../FormWidget';

export default {
  title:      'Demo/Layout/Components/Form/Input',
  component:  Input,
  decorators: [(Story) => <FormWidget> <Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<any>;

export const TextInput = ({args: {formKey: 'text'}})