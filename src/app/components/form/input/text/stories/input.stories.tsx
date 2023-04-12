import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Value} from '../Input';
import {mainDecorator} from '../../../../../../stories/util/decorators';
import {StandardForm} from '../../../Form';

export default {
  title:      'Demo/Layout/Components/Form/Value',
  component:  Value,
  decorators: [(Story) => <StandardForm> <Story/> </StandardForm>, mainDecorator],
} as ComponentMeta<typeof Value>;

export const TextInput = ({args: {formKey: 'text'}})