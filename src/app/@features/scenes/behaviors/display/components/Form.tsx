import React, {useState} from 'react';
import {Scene} from '../../../services/graphql/one';
import {FormWidget} from '@widgets/form/FormWidget';

import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {form__selectScene} from '@features/scenes/behaviors/select/config';
import {feature_sceneDisplay} from '../../../../../@/featureIds';

export function SceneDisplayForm() {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.scene?.id;
  return (
    <FeatureRequirement name={feature_sceneDisplay} alternative={'Need Scene Display'}>
      <FormWidget config={form__selectScene} onSubmit={setState}/>
      {id && <Scene id={id}/>}
    </FeatureRequirement>
  )
}