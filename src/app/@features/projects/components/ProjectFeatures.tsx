import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@services/features/item/components/Feature";
import {
  featureId__projectCreate,
  featureId__projectDisplay,
  featureId__projects,
} from "@/features/ids";
import { AssetFeatures } from "@features/assets/components/AssetFeatures";
import {
  selectPossibleProjectOptions,
  selectPossibleProjectsLastFetched,
} from "../services/redux/selectors";

function ProjectDisplayFeature() {
  const lastFetched = useSelector(selectPossibleProjectsLastFetched);
  const list = useSelector(selectPossibleProjectOptions);
  const enabled = lastFetched ? !!list.length : false;
  return <Feature name={featureId__projectDisplay} enabled={enabled} />;
}

function ProjectCreateFeature() {
  return <Feature name={featureId__projectCreate} enabled={true} />;
}

export function ProjectFeatures() {
  return (
    <Feature name={featureId__projects}>
      <ProjectDisplayFeature />
      <ProjectCreateFeature />
      <AssetFeatures />
    </Feature>
  );
}
