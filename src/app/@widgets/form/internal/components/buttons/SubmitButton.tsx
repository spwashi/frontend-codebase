import React, { useContext } from "react";
import { FormContext } from "../../../context/context";

export function SubmitButton() {
  const context = useContext(FormContext);
  return (
    <button
      key="submit"
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        context.submit();
      }}
    >
      submit
    </button>
  );
}
