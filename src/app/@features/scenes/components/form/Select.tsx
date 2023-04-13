import React from 'react';
import {SelectInput} from '@widgets/form/features/fields/components/input/select/SelectInput';
import {useSceneOptions} from '../../hooks/useOptions';

export function SceneSelect({formKey}: { formKey?: string; value?: string }) {
  const options = useSceneOptions();

  return (
    <SelectInput
      placeholder={'Scene'}
      formKey={formKey ?? ''}
      options={options}
    />
  );
}
