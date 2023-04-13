import React, {useState} from 'react';
import {Event} from '../../services/graphql/one';
import {FeatureRequirement} from '../../../../_services/features/components/Feature';
import {FormWidget} from '../../../../_widgets/form/FormWidget';
import {LoggedIn} from '../../../users/.behaviors/login/components/Requirement';

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