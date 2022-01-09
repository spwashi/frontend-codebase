import React, {useMemo, useState} from 'react';
import {ConceptContext as ConceptContext} from './context';
import {IConcept_Complete} from '../../../../../../../models/concept/hybrids';

export function ConceptContextProvider({children}: { children: any }) {
    const [concept, setConcept] = useState<IConcept_Complete | null>(null);
    const context               =
              useMemo(() => ({
                  concept: concept ?? null,
                  setConcept,
              }), [concept]);

    return (
        <ConceptContext.Provider value={context}>
            {children}
        </ConceptContext.Provider>
    )
}