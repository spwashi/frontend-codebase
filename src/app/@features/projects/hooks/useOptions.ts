import {useSelector} from 'react-redux';
import {selectPossibleProjectsList} from '../services/redux/selectors';

export function useProjectOptions() {
  return useSelector(selectPossibleProjectsList);
}