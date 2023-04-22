import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@services/features/item/components/Feature";
import {
  featureId__sceneDisplay,
  featureId__scenes,
} from '@/featureIds';
import {
  selectPossibleSceneOptions,
  selectPossibleScenesLastFetched,
} from "../services/redux/selectors";

function SceneDisplayFeature() {
  const lastFetched = useSelector(selectPossibleScenesLastFetched);
  const list = useSelector(selectPossibleSceneOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureId__sceneDisplay} enabled={enabled} />;
}
export function SceneFeatures() {
  return (
    <Feature name={featureId__scenes}>
      <SceneDisplayFeature />
    </Feature>
  );
}
