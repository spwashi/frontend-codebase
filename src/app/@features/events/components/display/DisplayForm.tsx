import React, {useState} from 'react';
import {Event} from '../../services/graphql/one';
import {Feature} from '@services/features/item/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';

import {eventDisplayFeatureName, eventDisplayFormFeatureName} from '@features/events/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {AllEventsQuery} from '@features/events/services/graphql/all/components/FindAll';

export function EventDisplayFormFeature() {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.event?.id;
  return (
    <FeatureRequirement name={eventDisplayFeatureName} alternative={'Need Events'}>
      <AllEventsQuery/>
      <Feature name={eventDisplayFormFeatureName}>
        <section>
          <header>Event Display</header>
          <FormWidget onSubmit={setState} config={{
            formId: 'display-event-form',
            items:  [{name: 'event', title: 'Event', type: 'event'}],
          }}/>
          {id && <Event id={id}/>}
        </section>
      </Feature>
    </FeatureRequirement>
  )
}