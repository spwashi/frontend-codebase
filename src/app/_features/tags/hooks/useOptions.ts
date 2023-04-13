import {useSelector} from 'react-redux';
import {selectPossibleTagsList} from '../_services/redux/selectors';

export function useTagOptions() {
  return useSelector(selectPossibleTagsList);
}