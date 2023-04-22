import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormWidget } from "@widgets/form/FormWidget";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { form__selectProject } from "@features/projects/behaviors/select/config";
import { SiteProjectController } from "../../../services/graphql/one";
import { selectProjectStateProject } from "../../../services/redux/selectors";
import { featureId__projectDisplay } from '@/featureIds';
import { IFormContextState } from "@widgets/form/context/types/state";

export function ProjectDisplayFormFeature() {
  const [formState, setFormState] = useState<IFormContextState>();
  const activeProject = useSelector(selectProjectStateProject);
  const project = formState?.currentValue?.project ?? activeProject;

  return (
    <FeatureRequirement
      name={featureId__projectDisplay}
      alternative={"Need Project Display"}
    >
      <FormWidget config={form__selectProject} onSubmit={setFormState} />
      <SiteProjectController id={project?.id} />
    </FeatureRequirement>
  );
}
