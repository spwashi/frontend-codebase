import { useMutation } from "@apollo/client";
import { gqlNode_USER_SIGNUP } from "@features/users/services/graphql/one/mutations/signup";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { selectMutationInput } from "@features/users/behaviors/signup/selectors";
import React from "react";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__userSignup } from "@features/users/behaviors/signup/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";

export function UserSignupForm() {
  const [send, response] = useMutation(gqlNode_USER_SIGNUP);
  const onsubmit = useMutationFormSubmitCallback(send, selectMutationInput);
  return (
    <React.Fragment>
      <FormWidget config={form__userSignup} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </React.Fragment>
  );
}
