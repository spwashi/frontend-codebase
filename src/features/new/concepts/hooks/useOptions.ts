import {useSelector} from 'react-redux';
import {selectPossibleConceptsList} from '../redux/selectors';
import {useMemo} from 'react';
import {ConceptOption} from '../../../../redux/state.types';

export function useConceptOptions() {
    const options        = useSelector(selectPossibleConceptsList);
    const optionValueMap = useMemo(
        () => new Map(options.map((o: ConceptOption) => [o.title, o.concept])),
        [options],
    );
    return {options, optionValueMap};
}