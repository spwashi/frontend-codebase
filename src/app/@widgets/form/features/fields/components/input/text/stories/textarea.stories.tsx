import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FormWidget} from '@widgets/form/FormWidget';
import {Textarea} from '../Textarea';

export default {
  title:      'Demo/Layout/Components/Form/Textarea',
  component:  Textarea,
  decorators: [(Story) => <FormWidget> <Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<any>;


export const LongTextInput = ({args: {formKey: 'text'}})