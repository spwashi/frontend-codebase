import React, {useState} from 'react';
import {Event} from '../../../services/graphql/one';
import {Feature} from '@services/features/item/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';

import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {AllEventsQuery} from '@features/events/services/graphql/all/components/FindAll';

import {form__selectEvent} from '@features/events/behaviors/select/config';
import {feature_eventDisplay, feature_eventDisplayForm} from '../../../../../@/featureIds';

function useSelectEventForm() {
  const [state, setState] = useState<any | null>();
  const event             = state?.data?.event;
  return [event, setState] as const;
}

export function EventDisplayFormFeature() {
  const [event, setState] = useSelectEventForm();
  return (
    <FeatureRequirement name={feature_eventDisplay} alternative={'Need Events'}>
      <AllEventsQuery/>
      <Feature name={feature_eventDisplayForm}>
        <FormWidget config={form__selectEvent}
                    onSubmit={setState}/>
        {event && <Event id={event.id}/>}
      </Feature>
    </FeatureRequirement>
  )
}