import React from "react";
import { gqlNode_USER_LOGIN } from "@features/users/services/graphql/one/mutations/login";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectLoginInput } from "@features/users/behaviors/login/selectors";
import { LoginReceiver } from "@features/users/behaviors/login/components/actions/LoginReceiver";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__login } from "@features/users/behaviors/login/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";

export function UserLoginForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_USER_LOGIN,
    selectLoginInput
  );
  const resp = response?.data?.logIn ?? {};
  const { username, jwt, user } = resp;

  return (
    <>
      <LoginReceiver jwt={jwt} username={username} user={user} />
      <FormWidget config={form__login} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </>
  );
}
