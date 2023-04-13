import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../util/storybook/decorators';
import {FormWidget} from '../../../../../.widgets/.form/FormWidget';
import {EventSelect} from '../Select';
import {AllEventsQuery} from '../../graphql/all/components/FindAll';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/EventSelect',
  component:  EventSelect,
  decorators: [(Story) => <FormWidget> <AllEventsQuery/><Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<typeof EventSelect>;

export const Input = ({args: {formKey: 'event'}})