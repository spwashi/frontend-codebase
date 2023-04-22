import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@services/features/item/components/Feature";
import {
  featureId__eventDisplay,
  featureId__events,
} from '@/featureIds';
import {
  selectPossibleEventOptions,
  selectPossibleEventsLastFetched,
} from "../services/redux/selectors";

function EventDisplayFeature() {
  const lastFetched = useSelector(selectPossibleEventsLastFetched);
  const list = useSelector(selectPossibleEventOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureId__eventDisplay} enabled={enabled} />;
}
export function EventFeatures() {
  return (
    <Feature name={featureId__events}>
      <EventDisplayFeature />
    </Feature>
  );
}
