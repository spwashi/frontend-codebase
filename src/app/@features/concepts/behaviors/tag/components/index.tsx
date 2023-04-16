import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {TagConceptForm} from './Form';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {AllTagsQuery} from '@features/tags/services/graphql/all';
import {feature_conceptDisplay, feature_conceptTagForm, feature_tagDisplay} from '../../../../../@/featureIds';

export function TagConceptFormFeature() {
  return (
    <FeatureRequirement name={feature_conceptDisplay} alternative={'Need Concepts Display'}>
      <FeatureRequirement name={feature_tagDisplay} alternative={'Need Tags Display'}>
        <Feature name={feature_conceptTagForm}>
          <AllTagsQuery/>
          <TagConceptForm/>
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
