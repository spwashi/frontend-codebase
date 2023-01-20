import {createContext, useContext} from 'react';
import {IConcept_Complete} from '../../../../../../../junction/models/concept/hybrids';
import {IConcept} from '../../../../../../../junction/models/concept/models';

type Concept =
    IConcept
    | IConcept_Complete
    | null;

type IConceptContext = {
    concept: Concept;
    setConcept: (concept: Concept) => void;
};
export function useActiveConcept(): Concept {
    const {concept = null} = useContext(ConceptContext) ?? {};

    return concept ?? null;
}

export const ConceptContext = createContext<IConceptContext | null>(null);