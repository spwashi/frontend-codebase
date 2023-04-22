import React from "react";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__createProject } from "@features/projects/behaviors/create/config";
import { graphQlNodes } from "@/graphql/nodes";
import { selectCreateProjectInput } from "../selectors";

export function ProjectCreateForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.project.create,
    selectCreateProjectInput
  );
  return (
    <section>
      <FormWidget
        config={form__createProject}
        onSubmit={onsubmit}
        defaultValue={{}}
      />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
