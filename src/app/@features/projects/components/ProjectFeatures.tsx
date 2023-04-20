import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@services/features/item/components/Feature";
import {
  selectPossibleProjectsLastFetched,
  selectPossibleProjectOptions,
} from "../services/redux/selectors";
import {
  featureId__projectCreate,
  featureId__projectDisplay,
  featureId__projects,
} from "../../../@/featureIds";
import { AssetFeatures } from "@features/assets/components/AssetFeatures";

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
