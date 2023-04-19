import { useContext } from "react";
import { FormContext } from "@widgets/form/context/context";

/**
 * Returns whether the form has changed state
 */
export function useFormHasChangedState() {
  const formState = useContext(FormContext);
  return !!Object.entries(formState.changed ?? {}).filter(([, v]) => v).length;
}
