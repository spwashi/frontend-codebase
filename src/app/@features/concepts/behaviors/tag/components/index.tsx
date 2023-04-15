import React from 'react';
import {Feature, FeatureRequirement} from '@services/features/components/Feature';
import {TagConceptForm} from './Form';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

import {conceptDisplayFeatureName, conceptTagFormFeatureName} from '@features/concepts/features';

export function RestrictedTagConceptForm() {
  return (
    <LoggedIn>
      <Feature name={conceptTagFormFeatureName}>
        <FeatureRequirement name={conceptDisplayFeatureName} alternative={'Need Concepts Display'}>
          <TagConceptForm/>
        </FeatureRequirement>
      </Feature>
    </LoggedIn>
  );
}
