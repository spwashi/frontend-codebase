import {useSelector} from 'react-redux';
import {selectPossibleEventsList} from '../../../redux/selectors';
import React from 'react';
import {EventDisplay} from '../../one/components/DisplayOne';

export function EventListDisplay() {
  const allEvents = useSelector(selectPossibleEventsList);
  return <>
    {allEvents.map(option => <EventDisplay key={option.payload.id} event={option.payload}/>)}
  </>
}