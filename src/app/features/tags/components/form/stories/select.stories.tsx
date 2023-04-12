import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {mainDecorator} from '../../../../../../stories/util/decorators';
import {StandardForm} from '../../../../../components/form/Form';
import {TagSelect} from '../Select';
import {AllTagsQuery} from '../../query/all';

export default {
  title:      'Demo/Layout/Components/Form/Widgets/TagSelect',
  component:  TagSelect,
  decorators: [(Story) => <StandardForm><AllTagsQuery/><Story/> </StandardForm>, mainDecorator],
} as ComponentMeta<typeof TagSelect>;

export const Input = ({args: {formKey: 'tag'}})