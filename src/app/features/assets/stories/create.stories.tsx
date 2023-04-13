import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../util/storybook/decorators';
import {Features} from '../../index';
import {UploadAssetForm} from '../behaviors/upload/components/form/Form';

export default {
  title:      'Admin/Forms/Datatypes/Asset/UploadAsset',
  component:  UploadAssetForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <Features list={['users', 'assets']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof UploadAssetForm>;

const Template: ComponentStory<typeof UploadAssetForm> = (args) => <UploadAssetForm {...args}/>;

export const UploadAsset = Template.bind({});
UploadAsset.args         = {};