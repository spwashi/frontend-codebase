import React, {useState} from 'react';
import {Event} from '../../services/graphql/one';
import {Feature, FeatureRequirement} from '@services/features/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

import {eventDisplayFeatureName, eventDisplayFormFeatureName} from '@features/events/features';

export function EventDisplayForm() {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.event?.id;
  return (
    <FeatureRequirement name={eventDisplayFeatureName} alternative={'Need Events'}>
      <LoggedIn>
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
      </LoggedIn>
    </FeatureRequirement>
  )
}