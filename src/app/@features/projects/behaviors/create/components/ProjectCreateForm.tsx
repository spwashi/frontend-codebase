import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { FormWidget } from "@widgets/form/FormWidget";
import { ErrorBoundary } from "@core/error/components/ErrorBoundary";
import { form__createProject } from "@features/projects/behaviors/create/config";
import { selectCreateProjectInput } from "../selectors";
import { useCreateProjectMutation } from "../../../services/graphql/one/mutations/create";
import { ACTION_PROJECT_CREATED } from "../../../services/redux/reducer";

export function ProjectCreateForm() {
  const { send, response } = useCreateProjectMutation();
  const dispatch = useDispatch();
  const [fatal, setFatal] = useState<any>(null);
  const onsubmit = useMutationFormSubmitCallback(
    (o) =>
      send(o)
        .then(() => {
          dispatch({ type: ACTION_PROJECT_CREATED });
        })
        .catch((e) => {
          console.log(e);
        }),
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
          onReset={() => response.reset()}
          onSubmit={onsubmit}
          defaultValue={{}}
        />
        <GraphqlMutationResponse response={response} />
      </ErrorBoundary>
    </section>
  );
}
