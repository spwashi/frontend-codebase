import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectMutationInput } from "@features/users/behaviors/signup/selectors";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__userSignup } from "@features/users/behaviors/signup/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { graphQlNodes } from "@identities/graphql/nodes";
import { featureIds } from "@identities/features/ids";
import { Feature } from "@widgets/feature";

export function UserSignupForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.user.signup,
    selectMutationInput
  );
  return (
    <Feature name={featureIds.user.signup_form}>
      <FormWidget config={form__userSignup} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </Feature>
  );
}
