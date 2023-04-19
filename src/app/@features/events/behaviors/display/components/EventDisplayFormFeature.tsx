import React, {useState} from 'react';
import {Event} from '../../../services/graphql/one';
import {Feature} from '@services/features/item/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';

import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {EventListQuery} from '@features/events/services/graphql/list/components/ListQuery';

import {form__selectEvent} from '@features/events/behaviors/select/config';
import {featureId__eventDisplay, featureId__eventDisplayForm} from '../../../../../@/featureIds';

function useSelectEventForm() {
  const [state, setState] = useState<any | null>();
  const event             = state?.data?.event;
  return [event, setState] as const;
}

export function EventDisplayFormFeature() {
  const [event, setState] = useSelectEventForm();
  return (
    <FeatureRequirement name={featureId__eventDisplay} alternative={'Need Events'}>
      <EventListQuery/>
      <Feature name={featureId__eventDisplayForm}>
        <FormWidget config={form__selectEvent}
                    onSubmit={setState}/>
        {event && <Event id={event.id}/>}
      </Feature>
    </FeatureRequirement>
  )
}