import {IEvent, IEventIdentifyingPartial} from '../../../../../../app/junction/models/event/models';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {EventContext} from '../context/context';
import {useDispatch} from 'react-redux';
import {ACTION_RECEIVE_ONE_EVENT} from '../../../../redux/reducer';

const EVENT_QUERY = gql`
    query OneEvent($id: Int!) {
        event(id: $id) {
            id
            title
            start
            startDate
            end
            endDate
            description
            user {
                id
                name
                username
            }
            eventTags {
                event {
                    id
                }
                tag {
                    id
                    title
                    domain
                }
            }
        }
    }
`;

export function OneEventQuery({id}: IEventIdentifyingPartial) {
    const context    = useContext(EventContext) ?? ({} as any);
    const {setEvent} = context;

    const {data: query} = useQuery(EVENT_QUERY, {variables: {id}});

    const dispatch = useDispatch();

    const {event} = query ?? {};

    useEffect(() => {
        if (!(event && setEvent)) return;

        dispatch({type: ACTION_RECEIVE_ONE_EVENT, payload: event})
        setEvent(event as IEvent);
    }, [event, setEvent]);

    return <></>
}