import React, {useMemo, useState} from 'react';
import {ConceptContext} from './context';
import {IConcept} from '../../../../../../../.junction/models/concept/models';

export function ConceptContextProvider({children, concept: _concept}: { children?: any, concept?: IConcept }) {
    const [concept, setConcept] = useState<IConcept | null>(_concept ?? null);
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