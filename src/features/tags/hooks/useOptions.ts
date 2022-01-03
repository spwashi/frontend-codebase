import {useSelector} from 'react-redux';
import {selectPossibleTagsList} from '../redux/selectors';
import {useMemo} from 'react';
import {TagOption} from '../../../redux/state.types';

export function useTagOptions() {
    const options        = useSelector(selectPossibleTagsList);
    const optionValueMap = useMemo(
        () => new Map(options.map((o: TagOption) => [o.title, o.tag])),
        [options],
    );
    return {options, optionValueMap};
}