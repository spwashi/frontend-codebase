import React, {useState} from 'react';
import {Concept} from '../../../services/graphql/one';
import {Feature} from '@services/features/item/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';
import {Log} from '@core/dev/components/Log';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {conceptDisplayFeatureName, conceptDisplayFormFeatureName} from '../../../features';
import {form__selectConcept} from '../../select/config';

export function ConceptDisplayForm() {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.concept?.id;
  return (
    <FeatureRequirement name={conceptDisplayFeatureName} alternative={'Need Concepts Display'}>
      <LoggedIn>
        <Feature name={conceptDisplayFormFeatureName}>
          <Log>{{id}}</Log>
          <FormWidget config={form__selectConcept}
                      onSubmit={setState}/>
          {id && <Concept id={id}/>}
        </Feature>
      </LoggedIn>
    </FeatureRequirement>
  )
}