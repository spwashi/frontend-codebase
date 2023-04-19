import { useMutation } from "@apollo/client";
import { gqlNode_USER_LOGIN } from "@features/users/services/graphql/one/mutations/login";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { selectLoginInput } from "@features/users/behaviors/login/selectors";
import { LoginReceiver } from "@features/users/behaviors/login/components/actions/LoginReceiver";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__login } from "@features/users/behaviors/login/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import React from "react";

export function UserLoginForm() {
  const [send, response] = useMutation(gqlNode_USER_LOGIN);
  const onsubmit = useMutationFormSubmitCallback(send, selectLoginInput);
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
