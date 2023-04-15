import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FeatureList} from '@services/features/components/FeatureList';
import {UploadAssetForm} from '../components/form/Form';

export default {
  title:      'Admin/Asset/UploadAsset',
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

const Template: ComponentStory<typeof UploadAssetForm> = () => <UploadAssetForm />;

export const UploadAsset = Template.bind({});
UploadAsset.args         = {};