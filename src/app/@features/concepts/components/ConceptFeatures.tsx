import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@widgets/feature";
import {
  selectPossibleConceptOptions,
  selectPossibleConceptsLastFetched,
} from "../services/redux/selectors";
import { featureIds } from "@identities/features/ids";

function ConceptDisplayFeature() {
  const lastFetched = useSelector(selectPossibleConceptsLastFetched);
  const list = useSelector(selectPossibleConceptOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureIds.concept.display} enabled={enabled} />;
}
export function ConceptFeatures() {
  return (
    <Feature name={featureIds.concept.concepts}>
      <ConceptDisplayFeature />
    </Feature>
  );
}
