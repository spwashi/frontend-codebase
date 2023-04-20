import { useEffect } from "react";
import { ACTION_SET_DEFAULT } from "@widgets/form/state/reducer";
import { IFormContextState } from "@widgets/form/context/types/state";

export function useSetFormDefaultEffect(
  defaultValue = null,
  dispatch: IFormContextState["dispatch"]
) {
  useEffect(() => {
    dispatch({ type: ACTION_SET_DEFAULT, payload: defaultValue });
  }, [defaultValue]);
}
