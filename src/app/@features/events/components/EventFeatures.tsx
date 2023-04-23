import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@widgets/feature";
import {
  selectPossibleEventOptions,
  selectPossibleEventsLastFetched,
} from "../services/redux/selectors";
import { featureIds } from "@/features/ids";

function EventDisplayFeature() {
  const lastFetched = useSelector(selectPossibleEventsLastFetched);
  const list = useSelector(selectPossibleEventOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureIds.event.display} enabled={enabled} />;
}
export function EventFeatures() {
  return (
    <Feature name={featureIds.event.events}>
      <EventDisplayFeature />
    </Feature>
  );
}
