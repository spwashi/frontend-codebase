import {createContext, useContext} from 'react';
import {IConcept_Complete} from '../../../../../../../models/concept/hybrids';

type IConceptContext = {
    concept: IConcept_Complete | null;
    setConcept: (concept: IConcept_Complete) => void;
};

export function useActiveConcept(): IConcept_Complete | null {
    const {concept = null} = useContext(ConceptContext) ?? {};

    return concept ?? null;
}

export const ConceptContext = createContext<IConceptContext | null>(null);