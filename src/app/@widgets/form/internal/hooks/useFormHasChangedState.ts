import { useContext } from "react";
import { FormContext } from "@widgets/form/context/context";

/**
 * Returns whether the form has changed state
 */
export function useFormHasChangedState() {
  const form = useContext(FormContext);
  return !!Object.entries(form.changed ?? {}).filter(([, v]) => v).length;
}
