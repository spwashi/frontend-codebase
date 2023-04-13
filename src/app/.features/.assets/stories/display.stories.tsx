import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '../../../util/storybook/decorators';
import {FeatureList} from '../../components/FeatureList';
import {AssetDisplay} from '../components/display/AssetDisplay';


export default {
  title:      'Admin/Forms/Datatypes/Asset/DisplayAsset',
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

const Template: ComponentStory<typeof AssetDisplay> = (args) => <AssetDisplay {...args}/>;

export const DisplayAsset = Template.bind({});
DisplayAsset.args         = {};
