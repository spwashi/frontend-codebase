import React from 'react';
import {FeatureRequirement} from '../../../../../.services/.features/components/Feature';
import {TagConceptForm} from './Form';
import {LoggedIn} from '../../../../users/.behaviors/login/components/Requirement';

export function RestrictedTagConceptForm({}) {
  return (
    <LoggedIn>
      <FeatureRequirement name="concepts.display" alternative={'Need Concepts Display'}>
        <TagConceptForm/>
      </FeatureRequirement>
    </LoggedIn>
  );
}
