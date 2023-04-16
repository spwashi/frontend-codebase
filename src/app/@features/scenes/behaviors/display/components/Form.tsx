import React, {useState} from 'react';
import {Scene} from '../../../services/graphql/one';
import {FormWidget} from '@widgets/form/FormWidget';

import {sceneDisplayFeatureName} from '@features/scenes/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {form__selectScene} from '@features/scenes/behaviors/select/config';

export function SceneDisplayForm() {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.scene?.id;
  return (
    <FeatureRequirement name={sceneDisplayFeatureName} alternative={'Need Scene Display'}>
      <FormWidget config={form__selectScene} onSubmit={setState}/>
      {id && <Scene id={id}/>}
    </FeatureRequirement>
  )
}