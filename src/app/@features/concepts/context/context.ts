import { createContext } from "react";
import { Concept } from "../../../../__generated__/graphql";

export type IConceptContext = {
  concept: Concept | null;
  setConcept: (concept: Concept) => void;
};

export const ConceptContext = createContext<IConceptContext>({
  concept: null,
  setConcept() {},
});
