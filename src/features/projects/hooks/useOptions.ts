import {useSelector} from 'react-redux';
import {selectPossibleProjectsList} from '../redux/selectors';
import {useMemo} from 'react';
import {ProjectOption} from '../../../redux/state.types';

export function useProjectOptions() {
    const options        = useSelector(selectPossibleProjectsList);
    const optionValueMap = useMemo(
        () => new Map(options.map((o: ProjectOption) => [o.title, o.project])),
        [options],
    );
    return {options, optionValueMap};
}