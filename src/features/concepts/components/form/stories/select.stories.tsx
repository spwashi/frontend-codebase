import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../stories/util/decorators';
import {StandardForm} from '../../../../../components/form/Form';
import {ConceptSelect} from '../Select';
import {AllConceptsQuery} from '../../graphql/all/components/FindAll';

export default {
    title:      'Demo/Layout/Components/Form/Widgets/ConceptSelect',
    component:  ConceptSelect,
    decorators: [(Story) => <StandardForm> <AllConceptsQuery/><Story/> </StandardForm>, mainDecorator],
} as ComponentMeta<typeof ConceptSelect>;

export const Input = ({args: {formKey: 'concept'}})