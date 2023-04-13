import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../../util/storybook/decorators';
import {StandardForm} from '../../../../../components/form/Form';
import {SceneSelect} from '../Select';
import {AllScenesQuery} from '../../graphql/all/components/FindAll';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/SceneSelect',
  component:  SceneSelect,
  decorators: [(Story) => <StandardForm><AllScenesQuery/><Story/></StandardForm>, mainDecorator],
} as ComponentMeta<typeof SceneSelect>;

export const Input = ({args: {formKey: 'scene'}})