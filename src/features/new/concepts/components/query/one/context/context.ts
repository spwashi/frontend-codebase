import {createContext} from 'react';
import {IConcept_Complete} from '../../../../../../../models';

type IConceptContext = {
    concept: IConcept_Complete | null;
    setConcept: (concept: IConcept_Complete) => void;
};
export const ConceptContext = createContext<IConceptContext | null>(null);