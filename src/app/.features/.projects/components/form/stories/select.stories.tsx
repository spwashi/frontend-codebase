import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../../util/storybook/decorators';
import {FormWidget} from '../../../../../.widgets/@form/FormWidget';
import {ProjectSelect} from '../Select';
import {AllProjectsQuery} from '../../query/all/all';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/ProjectSelect',
  component:  ProjectSelect,
  decorators: [(Story) => <FormWidget><AllProjectsQuery/> <Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<typeof ProjectSelect>;

export const Input = ({args: {formKey: 'project'}})