import React, { useContext } from "react";
import { FormContext } from "../../../context/context";
import { ACTION_RESET } from "../../../state/reducer";

export function ResetFormButton() {
  const form = useContext(FormContext);
  const { dispatch } = form;
  if (!dispatch) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: ACTION_RESET, payload: {} })}
      >
        reset
      </button>
    </>
  );
}
