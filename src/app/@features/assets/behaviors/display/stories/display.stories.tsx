import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {FeatureList} from '@services/features/list/components/FeatureList';
import {AssetDisplay} from '../../../components/display/AssetDisplay';


export default {
  title:      'Admin/Asset/DisplayAsset',
  component:  AssetDisplay,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <FeatureList list={['users', 'concepts']}/>
          <Story/>
        </React.Fragment>
      );
    },
    mainDecorator,
  ],
} as ComponentMeta<typeof AssetDisplay>;

const Template: ComponentStory<typeof AssetDisplay> = () => <AssetDisplay />;

export const DisplayAsset = Template.bind({});
DisplayAsset.args         = {};
