import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {TagEventForm} from './Form';
import {eventDisplayFeatureName, eventTagFormFeatureName} from '@features/events/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {tagDisplayFeatureName} from '@features/tags/features';
import {AllTagsQuery} from '@features/tags/services/graphql/all';

export function TagEventFormFeature() {
  return (
    <FeatureRequirement name={eventDisplayFeatureName} alternative={'Need Events Display for TagEventForm'}>
      <FeatureRequirement name={tagDisplayFeatureName} alternative={'Need Tags Display for Admin.TagEvent Form'}>
        <Feature name={eventTagFormFeatureName}>
          <AllTagsQuery/>
          <TagEventForm/>
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
