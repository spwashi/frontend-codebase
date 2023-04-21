import React from "react";
import { IConceptIdentifyingPartial } from "@junction/models/concept/models";
import { ConceptContextProvider } from "./context/Provider";
import { ConceptContextDisplay } from "./components/DisplayOne";
import { ConceptQuery } from "./components/ConceptQuery";

/**
 *
 * @param title
 * @constructor
 */
export function Concept({ id }: IConceptIdentifyingPartial) {
  if (!id) return null;
  return (
    <ConceptContextProvider>
      <ConceptQuery id={id} />
      <ConceptContextDisplay />
    </ConceptContextProvider>
  );
}
