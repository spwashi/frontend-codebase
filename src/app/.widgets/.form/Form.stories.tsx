import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../.services/.storybook/decorators';
import {FormWidget} from './FormWidget';
import {Form} from './components/Form';

export default {
  title:      'Demo/Layout/Forms/Basic',
  args:       {},
  decorators: [
    (Story) =>
      <React.Fragment>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<any>;

console.log(process.env.STORYBOOK_TEST_VAR)

const Template: ComponentStory<any> =
        (args) => {
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
        };

export const Example = Template.bind({});
Example.args         = {};