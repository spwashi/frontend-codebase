import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@services/features/item/components/Feature";
import { featureId__conceptDisplay, featureId__concepts } from "@/features/ids";
import {
  selectPossibleConceptOptions,
  selectPossibleConceptsLastFetched,
} from "../services/redux/selectors";

function ConceptDisplayFeature() {
  const lastFetched = useSelector(selectPossibleConceptsLastFetched);
  const list = useSelector(selectPossibleConceptOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureId__conceptDisplay} enabled={enabled} />;
}
export function ConceptFeatures() {
  return (
    <Feature name={featureId__concepts}>
      <ConceptDisplayFeature />
    </Feature>
  );
}
