import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { IFormContextState } from "@widgets/form/context/types/state";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

/**
 * Provides a callback that could be used to submit a form via ajax.
 */
export function useMutationForm<Mutation, Variables, FormData = any>(
  documentNode: TypedDocumentNode<Mutation, Variables>,
  selector: (
    formState: IFormContextState<FormData>["currentValue"]
  ) => Variables
) {
  const [send, response] = useMutation<any, Variables>(documentNode);

  // submit the form state to graphQl
  const onFormSubmit = useCallback(
    async ({ currentValue: data }: IFormContextState<FormData>) => {
      const variables = selector(data);
      await send({ variables });
    },
    [send, selector]
  );
  return [onFormSubmit, response] as const;
}
