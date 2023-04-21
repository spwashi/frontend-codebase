import { createContext, useContext } from "react";
import { Concept } from "../../../../__generated__/graphql";

export type IConceptContext = {
  concept: Concept | null;
  setConcept: (concept: Concept) => void;
};

export const ConceptContext = createContext<IConceptContext>({
  concept: null,
  setConcept() {},
});

export function useActiveConcept(): IConceptContext["concept"] {
  const { concept } = useContext(ConceptContext);

  return concept ?? null;
}
