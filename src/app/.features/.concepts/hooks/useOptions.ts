import {useSelector} from 'react-redux';
import {selectPossibleConceptsList} from '../.services/.redux/selectors';

export function useConceptOptions() {
  return useSelector(selectPossibleConceptsList);
}