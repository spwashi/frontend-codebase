import { useContext } from "react";
import {
  ConceptContext,
  IConceptContext,
} from "@features/concepts/context/context";

export function useActiveConcept(): IConceptContext["concept"] {
  const { concept } = useContext(ConceptContext);

  return concept ?? null;
}
