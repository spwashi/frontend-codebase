import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {featureId__tagCreateForm} from '../../../../../@/featureIds';
import {TagCreateForm} from '@features/tags/behaviors/create/components/TagCreateForm';

export function TagCreateFormFeature() {
  return (
    <Feature name={featureId__tagCreateForm}>
      <TagCreateForm/>
    </Feature>
  );
}
