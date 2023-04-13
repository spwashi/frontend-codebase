import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Value} from '../Input';
import {mainDecorator} from '../../../../../../../.services/.storybook/decorators';
import {FormWidget} from '../../../../../FormWidget';

export default {
  title:      'Demo/Layout/Components/Form/Value',
  component:  Value,
  decorators: [(Story) => <FormWidget> <Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<typeof Value>;

export const TextInput = ({args: {formKey: 'text'}})