import React from 'react';
import {Feature, FeatureRequirement} from '@services/features/components/Feature';
import {TagConceptForm} from './Form';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

export function RestrictedTagConceptForm() {
  return (
    <LoggedIn>
      <Feature name={'concept.tag.form'}>
        <FeatureRequirement name="concepts.display" alternative={'Need Concepts Display'}>
          <TagConceptForm/>
        </FeatureRequirement>
      </Feature>
    </LoggedIn>
  );
}
