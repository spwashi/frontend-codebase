import {useSelector} from 'react-redux';
import {selectPossibleEventsList} from '../redux/selectors';

export function useEventOptions() {
  return useSelector(selectPossibleEventsList);
}