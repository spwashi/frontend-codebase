import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@widgets/feature";
import {
  selectPossibleSceneOptions,
  selectPossibleScenesLastFetched,
} from "../services/redux/selectors";
import {
  featureId__sceneDisplay,
  featureId__scenes,
} from "@/features/scenes/ids";

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
