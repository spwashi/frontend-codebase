import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {TagConceptForm} from './Form';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

import {conceptDisplayFeatureName, conceptTagFormFeatureName} from '@features/concepts/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';

export function RestrictedTagConceptForm() {
  return (
    <FeatureRequirement name={conceptDisplayFeatureName} alternative={'Need Concepts Display'}>
      <LoggedIn>
        <Feature name={conceptTagFormFeatureName}>
          <TagConceptForm/>
        </Feature>
      </LoggedIn>
    </FeatureRequirement>
  );
}
