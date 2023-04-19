import { useEffect } from "react";
import { ACTION_SET_DEFAULT } from "@widgets/form/state/reducer";

export function useSetFormDefaultEffect(
  dispatchOnFormContext: (action: any) => void,
  defaultValue = {}
) {
  useEffect(() => {
    dispatchOnFormContext({ type: ACTION_SET_DEFAULT, payload: defaultValue });
  }, [defaultValue]);
}
