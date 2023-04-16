import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FormWidget} from './FormWidget';
import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_basicExampleFormForm, formId_basicExampleFormSubform} from '../../@/formIds';

const meta: Meta = {
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
const form__storybookExampleForm: IFormConfig = {
  title:  'Example Form for Storybook',
  formId: formId_basicExampleFormForm,
  items:  [
    {name: 'text', type: 'text', title: 'Text'},
    {name: 'longtext', type: 'longtext', title: 'Long Text'},
    {name: 'plain', type: 'content', title: 'Plain Content', contentType: 'text/plain'},
    {name: 'rich', type: 'content', title: 'Rich Text', contentType: 'text/rich'},
    {name: 'asset', type: 'asset', title: 'Asset'},
    {
      name: 'form', type: 'form', title: 'Form', config: {
        title:  'Example Subform for Storybook',
        formId: formId_basicExampleFormSubform,
        items:  [
          {name: 'text', type: 'text', title: 'Text'},
        ],
      },
    },
  ],
};

export const Example: Story =
               {
                 render: () => {
                   return <>
                     <FormWidget config={form__storybookExampleForm}/>
                   </>;
                 },
               };