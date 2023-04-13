import {useSelector} from 'react-redux';
import {selectPossibleConceptsList} from '../_services/redux/selectors';

export function useConceptOptions() {
  return useSelector(selectPossibleConceptsList);
}