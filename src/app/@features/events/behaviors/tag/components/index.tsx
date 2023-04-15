import React from 'react';
import {Feature, FeatureRequirement} from '@services/features/components/Feature';
import {TagEventForm} from './Form';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

import {eventDisplayFeatureName, eventTagFormFeatureName} from '@features/events/features';

export function RestrictedTagEventForm() {
  return (
    <LoggedIn>
      <Feature name={eventTagFormFeatureName}>
        <FeatureRequirement name={eventDisplayFeatureName} alternative={'Need Events Display for TagEventForm'}>
          <TagEventForm/>
        </FeatureRequirement>
      </Feature>
    </LoggedIn>
  );
}
