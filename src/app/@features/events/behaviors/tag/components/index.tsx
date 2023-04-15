import React from 'react';
import {Feature, FeatureRequirement} from '@services/features/components/Feature';
import {TagEventForm} from './Form';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

export function RestrictedTagEventForm() {
  return (
    <LoggedIn>
      <Feature name={'event.tag.form'}>
        <FeatureRequirement name="events.display" alternative={'Need Events Display for TagEventForm'}>
          <TagEventForm/>
        </FeatureRequirement>
      </Feature>
    </LoggedIn>
  );
}
