import React, {useMemo, useState} from 'react';
import {ConceptContext as ConceptContext} from './context';
import {IConcept_Complete} from '../../../../../../../models/concept/hybrids';
import {IConcept} from '../../../../../../../models/concept/models';

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