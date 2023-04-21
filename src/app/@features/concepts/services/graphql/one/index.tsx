import React from "react";
import { IConceptIdentifyingPartial } from "@junction/models/concept/models";
import { ConceptGate } from "@features/concepts/context/Provider";
import { ConceptContextDisplay } from "./components/ConceptDisplay";
import { ConceptQuery } from "./components/ConceptQuery";

/**
 *
 * @param title
 * @constructor
 */
export function Concept({ id }: IConceptIdentifyingPartial) {
  if (!id) return null;
  return (
    <ConceptGate>
      <ConceptQuery id={id} />
      <ConceptContextDisplay />
    </ConceptGate>
  );
}
