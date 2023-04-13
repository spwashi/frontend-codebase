import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../_services/storybook/decorators';
import {FormWidget} from '../../../../../_widgets/form/FormWidget';
import {EventSelect} from '../Select';
import {AllEventsQuery} from '../../../_services/graphql/all/components/FindAll';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/EventSelect',
  component:  EventSelect,
  decorators: [(Story) => <FormWidget> <AllEventsQuery/><Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<typeof EventSelect>;

export const Input = ({args: {formKey: 'event'}})