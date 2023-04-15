import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {TagConceptForm} from './Form';
import {conceptDisplayFeatureName, conceptTagFormFeatureName} from '@features/concepts/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {tagDisplayFeatureName} from '@features/tags/features';
import {AllTagsQuery} from '@features/tags/services/graphql/all';

export function TagConceptFormFeature() {
  return (
    <FeatureRequirement name={conceptDisplayFeatureName} alternative={'Need Concepts Display'}>
      <FeatureRequirement name={tagDisplayFeatureName} alternative={'Need Tags Display'}>
        <Feature name={conceptTagFormFeatureName}>
          <AllTagsQuery/>
          <TagConceptForm/>
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
