import {useSelector} from 'react-redux';
import {selectPossibleProjectsList} from '../redux/selectors';

export function useProjectOptions() {
    const options        = useSelector(selectPossibleProjectsList);
    return options;
}