import {useSelector} from 'react-redux';
import {selectPossibleProjectsList} from '../redux/selectors';
import {useMemo} from 'react';
import {ProjectOption} from '../redux/types';

export function useProjectOptions() {
    const options        = useSelector(selectPossibleProjectsList);
    return options;
}