import React from "react";
import { ConceptGate } from "@features/concepts/context/ConceptGate";
import { ConceptContextDisplay } from "./components/ConceptDisplay";
import { ConceptQuery } from "./components/ConceptQuery";
import { ConceptReferenceInput } from "../../../../../../__generated__/graphql";

/**
 *
 * @param title
 * @constructor
 */
export function Concept({ id }: ConceptReferenceInput) {
  if (!id) return null;
  return (
    <ConceptGate>
      <ConceptQuery id={id} />
      <ConceptContextDisplay />
    </ConceptGate>
  );
}
