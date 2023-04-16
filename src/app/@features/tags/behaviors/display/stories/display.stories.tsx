import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {mainDecorator} from '@services/storybook/decorators';
import {TagConceptFormFeature} from '@features/concepts/behaviors/tag';
import {FeatureList} from '@services/features/list/components/FeatureList';
import {DisplayTagsFormFeature} from '../../../components/display';


export default {
  title:      'Admin/Tag/DisplayTag',
  component:  DisplayTagsFormFeature,
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <FeatureList list={['users', 'tags', 'concepts']}/>
          <Story/>
        </React.Fragment>
      );
    },
    mainDecorator,
  ],
} as ComponentMeta<typeof TagConceptFormFeature>;

const Template: ComponentStory<typeof TagConceptFormFeature> = () => <DisplayTagsFormFeature />;

export const DisplayTag = Template.bind({});
DisplayTag.args         = {};
