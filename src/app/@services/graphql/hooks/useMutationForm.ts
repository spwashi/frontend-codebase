import { DocumentNode, OperationVariables, useMutation } from "@apollo/client";
import { useCallback } from "react";
import { IFormContextState } from "@widgets/form/context/types/state";

/**
 * Provides a callback that could be used to submit a form via ajax.
 */
export function useMutationForm<
  T extends OperationVariables | undefined = any,
  F = any
>(
  documentNode: DocumentNode,
  selector: (formState: IFormContextState<F>["currentValue"]) => T
) {
  const [send, response] = useMutation(documentNode);

  // submit the form state to graphQl
  const onFormSubmit = useCallback(
    async ({ currentValue: data }: IFormContextState<F>) => {
      const variables = selector(data);
      await send({ variables });
    },
    [send, selector]
  );
  return [onFormSubmit, response] as const;
}
