import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../stories/util/decorators';
import {StandardForm} from '../../../../../components/form/Form';
import {EventSelect} from '../Select';
import {AllEventsQuery} from '../../graphql/all/components/FindAll';

export default {
    title:      'Demo/Layout/Components/Form/Widgets/EventSelect',
    component:  EventSelect,
    decorators: [(Story) => <StandardForm> <AllEventsQuery/><Story/> </StandardForm>, mainDecorator],
} as ComponentMeta<typeof EventSelect>;

export const Input = ({args: {formKey: 'event'}})