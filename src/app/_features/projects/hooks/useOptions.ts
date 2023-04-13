import {useSelector} from 'react-redux';
import {selectPossibleProjectsList} from '../_services/redux/selectors';

export function useProjectOptions() {
  return useSelector(selectPossibleProjectsList);
}