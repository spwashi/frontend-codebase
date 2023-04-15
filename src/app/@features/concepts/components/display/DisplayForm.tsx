import React, {useState} from 'react';
import {Concept} from '../../services/graphql/one';
import {Feature, FeatureRequirement} from '@services/features/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';
import {Log} from '@core/dev/components/Log';
import {LoggedIn} from '../../../users/behaviors/login/components/Requirement';

export function ConceptDisplayForm() {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.concept?.id;
  return (
    <LoggedIn>
      <Feature name={'concept.display.form'}>
        <FeatureRequirement name="concepts.display" alternative={'Need Concepts Display'}>
          <Log>{{id}}</Log>
          <section>
            <FormWidget onSubmit={setState} config={{
              formId: 'display-concept-form',
              title:  'Display Concept',
              items:  [{name: 'concept', title: 'Concept', type: 'concept'}],
            }}/>
            {id && <Concept id={id}/>}
          </section>
        </FeatureRequirement>
      </Feature>
    </LoggedIn>
  )
}