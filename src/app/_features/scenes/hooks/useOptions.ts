import {useSelector} from 'react-redux';
import {selectPossibleScenesList} from '../_services/.redux/selectors';

export function useSceneOptions() {
  return useSelector(selectPossibleScenesList);
}