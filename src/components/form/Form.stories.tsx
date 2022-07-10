import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Form} from './context/FormContext';
import {mainDecorator} from '../../stories/_util/decorators';
import {StandardForm} from './Form';

export default {
    title:      'Demo/Layout/Forms/StandardForm',
    args:       {},
    decorators: [
        (Story) =>
            <React.Fragment>
                <Story/>
            </React.Fragment>,
        mainDecorator,
    ],
} as ComponentMeta<any>;

const Template: ComponentStory<any> =
          (args) => {
              return <>
                  <StandardForm config={{
                      formId: 'Example Form',
                      title:  'This is something',
                      items:  [
                          {name: 'text', type: 'text', title: 'Text'},
                          {name: 'text', type: 'longtext', title: 'Long Text'},
                          {name: 'plain', type: 'content', title: 'Plain Content', contentType: 'text/plain'},
                          {name: 'rich', type: 'content', title: 'Spw', contentType: 'text/rich'},
                          {name: 'asset', type: 'asset', title: 'Asset'},
                          {
                              name: 'form', type: 'form', title: 'Form', config: {
                                  formId: 'exampleForm',
                                  items:  [
                                      {name: 'text', type: 'text', title: 'Text'},
                                  ],
                              },
                          },
                      ],
                  }}/>
              </>;
          };

export const Default = Template.bind({});
Default.args         = {};