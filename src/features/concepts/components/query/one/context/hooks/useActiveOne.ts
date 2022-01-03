import {IConcept_Complete} from '../../../../../../../models';
import {useContext} from 'react';
import {ConceptContext} from '../context';

export function useActiveConcept(): IConcept_Complete | null {
    const {concept = null} = useContext(ConceptContext) ?? {};

    return concept ?? null;
}