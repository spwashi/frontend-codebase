import React, { useMemo, useState } from "react";
import { ConceptContext, IConceptContext } from "./context";

type IConceptContextProviderParams = {
  children?: any;
  concept?: IConceptContext["concept"];
};

/** Provides an ConceptContext */
export function ConceptGate(params: IConceptContextProviderParams) {
  const [concept, setConcept] = useState(params.concept ?? null);
  const context = useMemo(() => ({ concept, setConcept }), [concept]);

  return (
    <ConceptContext.Provider value={context}>
      {params.children}{" "}
    </ConceptContext.Provider>
  );
}
