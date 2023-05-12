import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@widgets/feature";
import { AssetFeatures } from "@features/assets/components/AssetFeatures";
import {
  selectPossibleProjectOptions,
  selectPossibleProjectsLastFetched,
} from "../services/redux/selectors";
import { featureIds } from "@identities/features/ids";

function ProjectDisplayFeature() {
  const lastFetched = useSelector(selectPossibleProjectsLastFetched);
  const list = useSelector(selectPossibleProjectOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureIds.project.display} enabled={enabled} />;
}

function ProjectCreateFeature() {
  return <Feature name={featureIds.project.create} enabled={true} />;
}

export function ProjectFeatures() {
  return (
    <Feature name={featureIds.project.projects}>
      <ProjectDisplayFeature />
      <ProjectCreateFeature />
      <AssetFeatures />
    </Feature>
  );
}
