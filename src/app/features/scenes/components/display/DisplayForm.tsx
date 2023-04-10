import React, {useState} from 'react';
import {Scene} from '../graphql/one';
import {FeatureRequirement} from '../../../_util';
import {StandardForm} from '../../../../components/form/Form';

export function SceneDisplayForm({}) {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.scene?.id;
  return (
    <FeatureRequirement name="scenes.display" alternative={'Need Scene Display'}>
      <section>
        <StandardForm onSubmit={setState} config={{
          formId: 'display-scene-form',
          title:  'Display Scene',
          items:  [{name: 'scene', title: 'Scene', type: 'scene'}],
        }}/>
        {id && <Scene id={id}/>}
      </section>
    </FeatureRequirement>
  )
}