import React, {useState} from 'react';
import {Concept} from '../graphql/one';
import {FeatureRequirement} from '../../../_util';
import {StandardForm} from '../../../../components/form/Form';
import {Log} from '../../../../components/Log';
import {LoggedIn} from '../../../users/behaviors/login/Requirement';

export function ConceptDisplayForm({}) {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.concept?.id;
  return (
    <LoggedIn>
      <FeatureRequirement name="concepts.display" alternative={'Need Concepts Display'}>
        <Log>{{id}}</Log>
        <section>
          <header>Concept Display</header>
          <StandardForm onSubmit={setState} config={{
            formId: 'display-concept-form',
            items:  [{name: 'concept', title: 'Concept', type: 'concept'}],
          }}/>
          {id && <Concept id={id}/>}
        </section>
      </FeatureRequirement>
    </LoggedIn>
  )
}