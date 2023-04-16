import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {TagEventForm} from './Form';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {TagListQuery} from '@features/tags/services/graphql/all';
import {featureId__eventDisplay, featureId__eventTagForm, featureId__tagDisplay} from '../../../../../@/featureIds';

export function TagEventFormFeature() {
  return (
    <FeatureRequirement name={featureId__eventDisplay} alternative={'Need Events Display for TagEventForm'}>
      <FeatureRequirement name={featureId__tagDisplay} alternative={'Need Tags Display for Admin.TagEvent Form'}>
        <Feature name={featureId__eventTagForm}>
          <TagListQuery/>
          <TagEventForm/>
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
