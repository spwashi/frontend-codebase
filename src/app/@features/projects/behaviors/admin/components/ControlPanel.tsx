import React from "react";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { ProjectFeatures } from "../../../components/Features";
import { ProjectDisplayFormFeature } from "../../display/components/ProjectDisplayFormFeature";
import { ProjectListQuery } from "../../../services/graphql/list/components/ListQuery";
import {
  featureId__projectCreate,
  featureId__projects,
} from "../../../../../@/featureIds";
import { ProjectCreateForm } from "../../create/components/ProjectCreateForm";

export function ProjectsControlPanel() {
  return (
    <>
      <ProjectListQuery />
      <ProjectFeatures />
      <FeatureRequirement
        name={featureId__projects}
        alternative={"Need Projects"}
      >
        <FeatureRequirement
          name={featureId__projectCreate}
          alternative={"Need Projects Create"}
        >
          <ProjectCreateForm />
        </FeatureRequirement>
        <ProjectDisplayFormFeature />
      </FeatureRequirement>
    </>
  );
}
