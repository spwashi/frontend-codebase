import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../../util/storybook/decorators';
import {FormWidget} from '../../../../../widgets/form/FormWidget';
import {ConceptSelect} from '../Select';
import {AllConceptsQuery} from '../../graphql/all/components/FindAll';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/ConceptSelect',
  component:  ConceptSelect,
  decorators: [(Story) => <FormWidget> <AllConceptsQuery/><Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<typeof ConceptSelect>;

export const Input = ({args: {formKey: 'concept'}})