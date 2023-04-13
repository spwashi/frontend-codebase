import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../../util/storybook/decorators';
import {FormWidget} from '../../../../../.widgets/@form/FormWidget';
import {TagSelect} from '../Select';
import {AllTagsQuery} from '../../query/all';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/TagSelect',
  component:  TagSelect,
  decorators: [(Story) => <FormWidget><AllTagsQuery/><Story/> </FormWidget>, mainDecorator],
} as ComponentMeta<typeof TagSelect>;

export const Input = ({args: {formKey: 'tag'}})