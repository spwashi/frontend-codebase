import {useSelector} from 'react-redux';
import {selectPossibleScenesList} from '../redux/selectors';

export function useSceneOptions() {
  return useSelector(selectPossibleScenesList);
}