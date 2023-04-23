import { useSelector } from "react-redux";
import React from "react";
import { selectConceptList } from "../../../redux/selectors";
import { ConceptDisplay } from "../../one/components/ConceptDisplay";

export function ConceptListDisplay() {
  const allConcepts = useSelector(selectConceptList);
  return (
    <>
      {allConcepts.map((concept) => (
        <ConceptDisplay key={concept.id} concept={concept} />
      ))}
    </>
  );
}
