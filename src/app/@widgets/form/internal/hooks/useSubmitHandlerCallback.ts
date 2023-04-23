import React, { useCallback } from "react";

export function useSubmitHandlerCallback(
  formState: any,
  onSubmit?: (data: any) => void
) {
  return useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault && event.preventDefault();
      event.stopPropagation && event.stopPropagation();
      onSubmit?.(formState);
    },
    [onSubmit, formState]
  );
}
