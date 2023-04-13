import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../../util/storybook/decorators';
import {FormWidget} from '../../../../../.widgets/.form/FormWidget';
import {SceneSelect} from '../Select';
import {AllScenesQuery} from '../../graphql/all/components/FindAll';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/SceneSelect',
  component:  SceneSelect,
  decorators: [(Story) => <FormWidget><AllScenesQuery/><Story/></FormWidget>, mainDecorator],
} as ComponentMeta<typeof SceneSelect>;

export const Input = ({args: {formKey: 'scene'}})