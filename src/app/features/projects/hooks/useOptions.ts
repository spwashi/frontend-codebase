import {useSelector} from 'react-redux';
import {selectPossibleProjectsList} from '../redux/selectors';

export function useProjectOptions() {
  return useSelector(selectPossibleProjectsList);
}