import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {TagConceptForm} from './Form';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {AllTagsQuery} from '@features/tags/services/graphql/all';
import {featureId__conceptDisplay, featureId__conceptTagForm, featureId__tagDisplay} from '../../../../../@/featureIds';

export function TagConceptFormFeature() {
  return (
    <FeatureRequirement name={featureId__conceptDisplay} alternative={'Need Concepts Display'}>
      <FeatureRequirement name={featureId__tagDisplay} alternative={'Need Tags Display'}>
        <Feature name={featureId__conceptTagForm}>
          <AllTagsQuery/>
          <TagConceptForm/>
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
