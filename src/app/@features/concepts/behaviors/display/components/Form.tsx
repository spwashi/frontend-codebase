import React, {useState} from 'react';
import {Concept} from '../../../services/graphql/one';
import {Feature} from '@services/features/item/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';
import {Log} from '@core/dev/components/Log';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {form__selectConcept} from '../../select/config';
import {feature_conceptDisplay, feature_conceptDisplayForm} from '../../../../../@/featureIds';

export function ConceptDisplayForm() {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.concept?.id;
  return (
    <FeatureRequirement name={feature_conceptDisplay} alternative={'Need Concepts Display'}>
      <LoggedIn>
        <Feature name={feature_conceptDisplayForm}>
          <Log>{{id}}</Log>
          <FormWidget config={form__selectConcept}
                      onSubmit={setState}/>
          {id && <Concept id={id}/>}
        </Feature>
      </LoggedIn>
    </FeatureRequirement>
  )
}