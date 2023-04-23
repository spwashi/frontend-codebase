import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@widgets/feature";
import {
  selectPossibleSceneOptions,
  selectPossibleScenesLastFetched,
} from "../services/redux/selectors";
import { featureIds } from "@/features/ids";

function SceneDisplayFeature() {
  const lastFetched = useSelector(selectPossibleScenesLastFetched);
  const list = useSelector(selectPossibleSceneOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureIds.scene.display} enabled={enabled} />;
}
export function SceneFeatures() {
  return (
    <Feature name={featureIds.scene.scenes}>
      <SceneDisplayFeature />
    </Feature>
  );
}
