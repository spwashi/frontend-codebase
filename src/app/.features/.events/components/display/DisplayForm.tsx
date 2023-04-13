import React, {useState} from 'react';
import {Event} from '../graphql/one';
import {FeatureRequirement} from '../../../../.services/.features/components/Feature';
import {FormWidget} from '../../../../.widgets/.form/FormWidget';
import {LoggedIn} from '../../../.users/behaviors/login/Requirement';

export function EventDisplayForm({}) {
  const [state, setState] = useState<any | null>();
  const id                = state?.data?.event?.id;
  return (
    <LoggedIn>
      <FeatureRequirement name="events.display" alternative={'Need Events'}>
        <section>
          <header>Event Display</header>
          <FormWidget onSubmit={setState} config={{
            formId: 'display-event-form',
            items:  [{name: 'event', title: 'Event', type: 'event'}],
          }}/>
          {id && <Event id={id}/>}
        </section>
      </FeatureRequirement>
    </LoggedIn>
  )
}