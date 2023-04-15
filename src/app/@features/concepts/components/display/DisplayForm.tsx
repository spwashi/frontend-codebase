import React, {useState} from 'react';
import {Concept} from '../../services/graphql/one';
import {Feature} from '@services/features/item/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';
import {Log} from '@core/dev/components/Log';
import {LoggedIn} from '../../../users/behaviors/login/components/Requirement';

import {conceptDisplayFeatureName, conceptDisplayFormFeatureName} from '@features/concepts/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';

export function ConceptDisplayForm() {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.concept?.id;
  return (
    <FeatureRequirement name={conceptDisplayFeatureName} alternative={'Need Concepts Display'}>
      <LoggedIn>
        <Feature name={conceptDisplayFormFeatureName}>
          <Log>{{id}}</Log>
          <section>
            <FormWidget onSubmit={setState} config={{
              formId: 'display-concept-form',
              title:  'Display Concept',
              items:  [{name: 'concept', title: 'Concept', type: 'concept'}],
            }}/>
            {id && <Concept id={id}/>}
          </section>
        </Feature>
      </LoggedIn>
    </FeatureRequirement>
  )
}