import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectInput } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { updateFormItem } from "@widgets/form/features/fields/hooks/useFormItem";
import { FormContext } from "@widgets/form/context/context";
import { Value } from "@widgets/form/features/fields/components/input/text/Input";
import { useProjectOptions } from "../../hooks/useOptions";
import { selectProjectStateProject } from "../../services/redux/selectors";
import { ProjectListQuery } from "../../services/graphql/list/components/ListQuery";

export function ProjectSelect({
  formKey,
  ignore,
}: {
  formKey?: string;
  ignore?: boolean;
}) {
  const options = useProjectOptions();
  const project = useSelector(selectProjectStateProject);

  useEffect(() => {
    const value = project;
    !ignore && value && updateFormItem(formKey ?? "", value);
  }, [project]);

  const activeProject = project;
  const doUseActive = !ignore && activeProject;
  if (doUseActive) {
    return (
      <Value value={activeProject} formKey={formKey ?? ""}>
        {activeProject.title}
      </Value>
    );
  }

  return (
    <React.Fragment>
      <ProjectListQuery />
      <SelectInput
        placeholder={"Project"}
        formKey={formKey ?? ""}
        options={options}
      />
    </React.Fragment>
  );
}
