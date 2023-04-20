import { MutationFunctionOptions, OperationVariables } from "@apollo/client";
import { useCallback } from "react";
import { IFormContextState } from "@widgets/form/context/types/state";

/**
 * Provides a callback that could be used to submit a form via ajax.
 *
 * @param send
 * @param selector
 */
export function useMutationFormSubmitCallback<
  T extends OperationVariables | undefined = any
>(
  send: (options?: MutationFunctionOptions) => any,
  selector: (data: any) => T
) {
  return useCallback(
    async ({ currentValue: data }: IFormContextState) => {
      const variables = selector(data);
      const parameters = { variables };
      await send(parameters);
    },
    [send, selector]
  );
}
