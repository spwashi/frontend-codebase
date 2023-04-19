import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {featureId__eventCreateForm} from '../../../../../@/featureIds';
import {EventCreateForm} from '@features/events/behaviors/create/components/EventCreateForm';

export function EventCreateFormFeature() {
  return (
    <Feature name={featureId__eventCreateForm}>
      <EventCreateForm/>
    </Feature>
  );
}
