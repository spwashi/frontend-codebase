import React, {useState} from 'react';
import {Event} from '../graphql/one';
import {FeatureRequirement} from '../../../_util';
import {StandardForm} from '../../../../components/form/Form';

export function EventDisplayForm({}) {
    const [state, setState] = useState<any | null>();
    const id                = state?.data?.event?.id;
    return (
        <FeatureRequirement name="events.display" alternative={'Need Events'}>
            <section>
                <header>Event Display</header>
                <StandardForm onSubmit={setState} config={{
                    formId: 'display-event-form',
                    items:  [{name: 'event', title: 'Event', type: 'event'}],
                }}/>
                {id && <Event id={id}/>}
            </section>
        </FeatureRequirement>
    )
}