import {useSelector} from 'react-redux';
import {selectPossibleConceptsList} from '../redux/selectors';

export function useConceptOptions() {
    return useSelector(selectPossibleConceptsList);
}