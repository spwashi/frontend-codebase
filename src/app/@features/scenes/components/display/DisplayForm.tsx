import React, {useState} from 'react';
import {Scene} from '../../services/graphql/one';
import {FormWidget} from '@widgets/form/FormWidget';

import {sceneDisplayFeatureName} from '@features/scenes/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';

export function SceneDisplayForm() {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.scene?.id;
  return (
    <FeatureRequirement name={sceneDisplayFeatureName} alternative={'Need Scene Display'}>
      <section>
        <FormWidget onSubmit={setState} config={{
          formId: 'display-scene-form',
          title:  'Display Scene',
          items:  [{name: 'scene', title: 'Scene', type: 'scene'}],
        }}/>
        {id && <Scene id={id}/>}
      </section>
    </FeatureRequirement>
  )
}