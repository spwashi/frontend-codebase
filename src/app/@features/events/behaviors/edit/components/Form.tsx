import React, {useState} from 'react';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editEvent, form__selectEvent, selectEditEventInput} from '../config';
import {useEditEventMutation} from '../mutation';
import {FormWidget} from '@widgets/form/FormWidget';
import {Log} from '@core/dev/components/Log';
import {Feature} from '@services/features/item/components/Feature';
import {eventEditFormFeatureName} from '@features/events/features';
import {AllEventsQuery} from '@features/events/services/graphql/all/components/FindAll';

function useEventSelectForm() {
  const [{data: {event} = {} as any} = {} as any, setEventFromForm] = useState({} as any);
  return [event, setEventFromForm] as const;
}

function EditEventForm() {
  const {send, response}          = useEditEventMutation();
  const onsubmit                  = useMutationFormSubmitCallback(send, selectEditEventInput);
  const [event, setEventFromForm] = useEventSelectForm();
  return (
    <div>
      <Log>{event}</Log>
      <FormWidget config={form__selectEvent} onSubmit={setEventFromForm}/>
      {
        event && (
          <FormWidget config={form__editEvent} onSubmit={onsubmit} defaultValue={event}/>
        )}
      <GraphqlMutationResponse response={response}/>
    </div>
  )
}

export function EditEventFormFeature() {
  return (
    <Feature name={eventEditFormFeatureName}>
      <AllEventsQuery/>
      <EditEventForm/>
    </Feature>
  );
}
