import React, { useState } from "react";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { ErrorBoundary } from "@core/error/components/ErrorBoundary";
import { form__createProject } from "@features/projects/behaviors/create/config";
import { selectCreateProjectInput } from "../selectors";
import { gqlNode_PROJECT_CREATE } from "../../../services/graphql/one/mutations/create";

export function ProjectCreateForm() {
  const [fatal, setFatal] = useState<any>(null);
  const [onsubmit, response] = useMutationForm(
    gqlNode_PROJECT_CREATE,
    selectCreateProjectInput
  );
  return (
    <section id="form__project-create">
      {fatal && (
        <button onClick={() => (setFatal(null), response.reset())}>
          [clear]
        </button>
      )}
      <ErrorBoundary handler={(e) => setFatal(e)} error={fatal}>
        <FormWidget
          config={form__createProject}
          onSubmit={onsubmit}
          defaultValue={{}}
        />
        <GraphqlMutationResponse response={response} />
      </ErrorBoundary>
    </section>
  );
}
