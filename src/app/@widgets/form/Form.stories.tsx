import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FormWidget} from './FormWidget';
import {Form} from './components/Form';

let meta: Meta = {
  title:      'Demo/Layout/Forms/Basic',
  args:       {},
  decorators: [
    (Story) =>
      <React.Fragment>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
};
export default meta;

type Story = StoryObj<any>;

export const Example: Story =
               {
                 render: () => {
                   return <>
                     <FormWidget config={{
                       formId: 'basicExampleForm-form',
                       title:  'This is an example form',
                       items:  [
                         {name: 'text', type: 'text', title: 'Text'},
                         {name: 'longtext', type: 'longtext', title: 'Long Text'},
                         {name: 'plain', type: 'content', title: 'Plain Content', contentType: 'text/plain'},
                         {name: 'rich', type: 'content', title: 'Rich Text', contentType: 'text/rich'},
                         {name: 'asset', type: 'asset', title: 'Asset'},
                         {
                           name: 'form', type: 'form', title: 'Form', config: {
                             formId: 'basicExampleForm-subform',
                             items:  [
                               {name: 'text', type: 'text', title: 'Text'},
                             ],
                           },
                         },
                       ],
                     }}/>
                   </>;
                 },
               };