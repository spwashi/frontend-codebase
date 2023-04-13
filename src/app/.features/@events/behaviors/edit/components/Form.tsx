import React, {useState} from 'react';
import {GraphqlMutationResponse} from '../../../../../.services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../.services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editEvent, selectEditEventInput} from '../config';
import {useEditEventMutation} from '../mutation';
import {FormWidget} from '../../../../../widgets/form/FormWidget';
import {LoggedIn} from '../../../../@users/behaviors/login/Requirement';
import {EventSelect} from '../../../components/form/Select';
import {Log} from '../../../../../components/dev/Log';
import {Form} from '../../../../../widgets/form/components/Form';

export function EditEventForm() {
  const {send, response}  = useEditEventMutation();
  const onsubmit          = useMutationFormSubmitCallback(send, selectEditEventInput);
  const [{data}, setData] = useState<any | null>({});

  const [{data: {event: _event} = {} as any} = {} as any, setEvent] = useState({} as any);
  return (
    <div style={{border: 'thin solid red'}}>
      <Log>{_event}</Log>
      <Form onChange={setEvent}>
        <EventSelect formKey="event"/>
      </Form>
      {
        _event && (
          <FormWidget
            config={form__editEvent}
            onSubmit={onsubmit}
            onChange={setData}
            defaultValue={_event}
          />
        )}
      <GraphqlMutationResponse response={response}/>
    </div>
  )
}

export function RestrictedEditEventForm({}) {
  return (
    <LoggedIn>
      <EditEventForm/>
    </LoggedIn>
  );
}
