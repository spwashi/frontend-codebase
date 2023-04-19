import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormWidget } from "@widgets/form/FormWidget";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { form__selectProject } from "@features/projects/behaviors/select/config";
import { SiteProjectController } from "../../../services/graphql/one";
import { selectProjectStateProject } from "../../../services/redux/selectors";
import { featureId__projectDisplay } from "../../../../../@/featureIds";

export function ProjectDisplayFormFeature() {
  const [state, setState] = useState<any | null>();
  const activeProject = useSelector(selectProjectStateProject);
  const project = state?.data?.project ?? activeProject;

  return (
    <FeatureRequirement
      name={featureId__projectDisplay}
      alternative={"Need Project Display"}
    >
      <FormWidget config={form__selectProject} onSubmit={setState} />
      <SiteProjectController id={project?.id} />
    </FeatureRequirement>
  );
}
