import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../../util/storybook/decorators';
import {FeatureList} from '../../components/FeatureList';
import {UploadAssetForm} from '../behaviors/upload/components/form/Form';

export default {
  title:      'Admin/Forms/Datatypes/Asset/UploadAsset',
  component:  UploadAssetForm,
  decorators: [
    (Story) =>
      <React.Fragment>
        <FeatureList list={['users', 'assets']}/>
        <Story/>
      </React.Fragment>,
    mainDecorator,
  ],
} as ComponentMeta<typeof UploadAssetForm>;

const Template: ComponentStory<typeof UploadAssetForm> = (args) => <UploadAssetForm {...args}/>;

export const UploadAsset = Template.bind({});
UploadAsset.args         = {};