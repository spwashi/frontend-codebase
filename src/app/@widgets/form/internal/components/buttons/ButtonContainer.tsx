import React from "react";
import { ResetFormButton } from "./ResetFormButton";
import { SubmitButton } from "./SubmitButton";
import { useFormHasChangedState } from "@widgets/form/internal/hooks/useFormHasChangedState";

export type ButtonConfig = { type: "submit" | "reset" };

type IButtonContainerParams = {
  buttons?: (ButtonConfig | false)[];
};
export function ButtonContainer({ buttons }: IButtonContainerParams) {
  const hasChanged = useFormHasChangedState();
  if (!(buttons || hasChanged)) return null;
  return (
    <div className="button-container">
      {(buttons ?? []).map((button) => {
        if (!button) return null;
        return button.type === "submit" ? (
          <SubmitButton key={button.type} />
        ) : null;
      })}
      {hasChanged ? <ResetFormButton /> : null}
    </div>
  );
}
