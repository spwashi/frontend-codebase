import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../../../util/storybook/decorators';
import {FormWidget} from '../../../../../FormWidget';
import {Textarea} from '../Textarea';

export default {
  title:      'Demo/Layout/Components/Form/Textarea',
  component:  Textarea,
  decorators: [(Story) => <FormWidget> <Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<any>;


export const LongTextInput = ({args: {formKey: 'text'}})