import {useSelector} from 'react-redux';
import {selectPossibleEventsList} from '../_services/.redux/selectors';

export function useEventOptions() {
  return useSelector(selectPossibleEventsList);
}