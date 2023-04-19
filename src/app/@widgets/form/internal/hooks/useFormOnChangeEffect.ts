import { useEffect } from "react";

export function useFormOnChangeEffect<FormData = any>(
  formState: FormData,
  handleChange?: (data: FormData) => void
) {
  useEffect(() => {
    handleChange?.(formState);
  }, [formState]);
}
