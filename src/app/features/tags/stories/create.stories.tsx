import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../util/storybook/decorators';
import {Features} from '../../index';
import {RestrictedCreateTagForm} from '../behaviors/create';

export default {
  title:      'Admin/Forms/Datatypes/Tag/CreateTag',
  component:  RestrictedCreateTagForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <Features list={['users', 'tags']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof RestrictedCreateTagForm>;

const Template: ComponentStory<typeof RestrictedCreateTagForm> = (args) => <RestrictedCreateTagForm {...args}/>;

export const CreateTag = Template.bind({});
CreateTag.args         = {};