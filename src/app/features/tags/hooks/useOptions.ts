import {useSelector} from 'react-redux';
import {selectPossibleTagsList} from '../redux/selectors';

export function useTagOptions() {
  return useSelector(selectPossibleTagsList);
}