import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { useCallback, useState } from "react";

export function useFormModifierHandler(
  form: IFormConfig,
  index: "onReset" | "onChange" | "onSubmit",
  origHandler?: (e: any) => void
): [boolean, (d: any) => void] {
  const [hasStateChanged, setHasStateChanged] = useState(false);

  const handler = useCallback(
    (d: any) => {
      const out = form.items.map((item) => {
        const validators = item.validators?.[index];
        if (!validators) return [];
        return [
          item.name,
          validators.map((validator) => validator(d, d?.[item.name])),
        ];
      });
      const stateChanged =
        out.filter(([, o]) => {
          return (o as any)?.filter(
            (o: any) => typeof o !== "undefined" && o !== true
          ).length;
        }).length === 0;
      setHasStateChanged(stateChanged);
      if (!origHandler) return;
      origHandler(d);
    },
    [origHandler]
  );

  return [hasStateChanged, handler];
}
