import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectMutationInput } from "@features/users/behaviors/signup/selectors";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__userSignup } from "@features/users/behaviors/signup/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { graphQlNodes } from "@identities/graphql/nodes";

export function UserSignupForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.user.signup,
    selectMutationInput
  );
  return (
    <React.Fragment>
      <FormWidget config={form__userSignup} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </React.Fragment>
  );
}
