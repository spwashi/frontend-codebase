import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../_services/storybook/decorators';
import {FormWidget} from '../../../../../_widgets/form/FormWidget';
import {UserSelect} from '../Select';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/UserSelect',
  component:  UserSelect,
  decorators: [(Story) => <FormWidget> <Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<typeof UserSelect>;

export const Input = ({args: {formKey: 'user'}})