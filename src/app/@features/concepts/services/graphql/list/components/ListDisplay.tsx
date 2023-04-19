import { useSelector } from "react-redux";
import React from "react";
import { selectPossibleConceptsList } from "../../../redux/selectors";
import { ConceptDisplay } from "../../one/components/DisplayOne";

export function ConceptListDisplay() {
  const allConcepts = useSelector(selectPossibleConceptsList);
  return (
    <>
      {allConcepts.map((option) => (
        <ConceptDisplay key={option.payload.id} concept={option.payload} />
      ))}
    </>
  );
}
