import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../_services/storybook/decorators';
import {FormWidget} from '../../../../../_widgets/form/FormWidget';
import {SceneSelect} from '../Select';
import {AllScenesQuery} from '../../../_services/.graphql/all/components/FindAll';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/SceneSelect',
  component:  SceneSelect,
  decorators: [(Story) => <FormWidget><AllScenesQuery/><Story/></FormWidget>, mainDecorator],
} as ComponentMeta<typeof SceneSelect>;

export const Input = ({args: {formKey: 'scene'}})