import { useSelector } from "react-redux";
import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { featureId__tagDisplay, featureId__tags } from '@/featureIds';
import {
  selectPossibleTagOptions,
  selectPossibleTagsLastFetched,
} from "../services/redux/selectors";

function TagDisplayFeature() {
  const lastFetched = useSelector(selectPossibleTagsLastFetched);
  const list = useSelector(selectPossibleTagOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureId__tagDisplay} enabled={enabled} />;
}
export function TagFeatures() {
  return (
    <Feature name={featureId__tags}>
      <TagDisplayFeature />
    </Feature>
  );
}
