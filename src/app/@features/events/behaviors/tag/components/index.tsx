import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {TagEventForm} from './Form';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

import {eventDisplayFeatureName, eventTagFormFeatureName} from '@features/events/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';

export function RestrictedTagEventForm() {
  return (
    <FeatureRequirement name={eventDisplayFeatureName} alternative={'Need Events Display for TagEventForm'}>
      <LoggedIn>
        <Feature name={eventTagFormFeatureName}>
          <TagEventForm/>
        </Feature>
      </LoggedIn>
    </FeatureRequirement>
  );
}
