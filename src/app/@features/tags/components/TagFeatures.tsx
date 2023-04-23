import { useSelector } from "react-redux";
import React from "react";
import { Feature } from "@widgets/feature";
import {
  selectPossibleTagOptions,
  selectPossibleTagsLastFetched,
} from "../services/redux/selectors";
import { featureIds } from "@/features/ids";

function TagDisplayFeature() {
  const lastFetched = useSelector(selectPossibleTagsLastFetched);
  const list = useSelector(selectPossibleTagOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureIds.tag.tags} enabled={enabled} />;
}
export function TagFeatures() {
  return (
    <Feature name={featureIds.tag.tags}>
      <TagDisplayFeature />
    </Feature>
  );
}
