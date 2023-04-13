import React from 'react';
import {FeatureRequirement} from '../../../../../.services/.features/components/Feature';
import {TagEventForm} from './Form';
import {LoggedIn} from '../../../../.users/behaviors/login/Requirement';

export function RestrictedTagEventForm({}) {
  return (
    <LoggedIn>
      <FeatureRequirement name="events.display" alternative={'Need Events Display for TagEventForm'}>
        <TagEventForm/>
      </FeatureRequirement>
    </LoggedIn>
  );
}
