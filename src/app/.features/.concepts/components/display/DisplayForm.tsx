import React, {useState} from 'react';
import {Concept} from '../graphql/one';
import {FeatureRequirement} from '../../../../.services/.features/components/Feature';
import {FormWidget} from '../../../../.widgets/.form/FormWidget';
import {Log} from '../../../../components/dev/Log';
import {LoggedIn} from '../../../.users/behaviors/login/Requirement';

export function ConceptDisplayForm({}) {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.concept?.id;
  return (
    <LoggedIn>
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
    </LoggedIn>
  )
}