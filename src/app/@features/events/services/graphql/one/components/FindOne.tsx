import {IEvent, IEventIdentifyingPartial} from '@junction/models/event/models';
import {useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {EventContext} from '../context/context';
import {useDispatch} from 'react-redux';
import {ACTION_RECEIVE_ONE_EVENT} from '../../../redux/reducer';
import {gqlQueryNode_EVENT} from '@features/events/services/graphql/queries/one/query';

export function OneEventQuery({id}: IEventIdentifyingPartial) {
  const context       = useContext(EventContext) ?? ({} as any);
  const {setEvent}    = context;
  const {data: query} = useQuery(gqlQueryNode_EVENT, {variables: {id}});
  const dispatch      = useDispatch();
  const {event}       = query ?? {};

  useEffect(() => {
    if (!(event && setEvent)) return;
    dispatch({type: ACTION_RECEIVE_ONE_EVENT, payload: event})
    setEvent(event as IEvent);
  }, [event, setEvent]);

  return <></>
}