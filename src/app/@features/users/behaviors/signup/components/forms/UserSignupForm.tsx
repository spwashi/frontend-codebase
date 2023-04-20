import React from "react";
import { gqlNode_USER_SIGNUP } from "@features/users/services/graphql/one/mutations/signup";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectMutationInput } from "@features/users/behaviors/signup/selectors";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__userSignup } from "@features/users/behaviors/signup/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";

export function UserSignupForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_USER_SIGNUP,
    selectMutationInput
  );
  return (
    <React.Fragment>
      <FormWidget config={form__userSignup} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </React.Fragment>
  );
}
