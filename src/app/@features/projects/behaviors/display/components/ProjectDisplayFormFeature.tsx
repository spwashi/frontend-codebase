import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormWidget } from "@widgets/form/FormWidget";
import { FeatureRequirement } from "@widgets/feature";
import { form__selectProject } from "@features/projects/behaviors/select/config";
import { IFormContextState } from "@widgets/form/context/types/state";
import { Project } from "../../../services/graphql/one/Project";
import { selectProjectStateProject } from "../../../services/redux/selectors";
import { featureId__projectDisplay } from "@/features/projects/ids";

export function ProjectDisplayFormFeature() {
  const [formState, setFormState] = useState<IFormContextState>();
  const activeProject = useSelector(selectProjectStateProject);
  const project = formState?.currentValue?.project ?? activeProject;

  return (
    <FeatureRequirement name={featureId__projectDisplay}>
      <FormWidget config={form__selectProject} onSubmit={setFormState} />
      <Project id={project?.id} />
    </FeatureRequirement>
  );
}
