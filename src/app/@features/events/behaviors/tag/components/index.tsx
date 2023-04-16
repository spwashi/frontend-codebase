import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {TagEventForm} from './Form';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {AllTagsQuery} from '@features/tags/services/graphql/all';
import {feature_eventDisplay, feature_eventTagForm, feature_tagDisplay} from '../../../../../@/featureIds';

export function TagEventFormFeature() {
  return (
    <FeatureRequirement name={feature_eventDisplay} alternative={'Need Events Display for TagEventForm'}>
      <FeatureRequirement name={feature_tagDisplay} alternative={'Need Tags Display for Admin.TagEvent Form'}>
        <Feature name={feature_eventTagForm}>
          <AllTagsQuery/>
          <TagEventForm/>
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
