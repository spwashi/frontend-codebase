import React, { useMemo, useRef } from "react";
import cloneDeep from "lodash/cloneDeep";
import { formClassNames } from "./styles/classNames";
import FormItems from "./features/fields/components/FieldFactory";
import AppForm from "@widgets/form/internal/components/AppForm";

import { IFormConfig } from "./types/IFormConfig";
import { useFormModifierHandler } from "@widgets/form/hooks/useFormWidgetModifierHandler";
import { FormErrorBoundary } from "@widgets/form/error/components/FormErrorBoundary";
import { IFormItemConfig } from "@widgets/form/features/fields/types/fieldConfig";

type IFormWidgetParams<
  ValueStruct extends { [k: string]: IFormItemConfig } = any
> = {
  config: IFormConfig<ValueStruct>;
  children?: any;
  defaultValue?: any;
  onSubmit?: (data: any) => void;
  onChange?: (data: any) => void;
};

export function FormWidget({
  config: formConfig,
  defaultValue,
  onSubmit,
  children,
  onChange,
}: IFormWidgetParams) {
  const defaultForm = useMemo(() => cloneDeep(formConfig), [formConfig]);
  const formRef = useRef(defaultForm);
  const form = formRef.current;
  const [changed, changeHandler] = useFormModifierHandler(
    form,
    "onChange",
    onChange
  );
  const [, submitHandler] = useFormModifierHandler(form, "onSubmit", onSubmit);
  const canSubmit = !!onSubmit && changed;
  return (
    <section className={formClassNames.formWrapper}>
      <header>
        {form.title} <small className="dev-only">{form.formId}</small>
      </header>
      <FormErrorBoundary>
        <AppForm
          id={form.formId}
          defaultValue={defaultValue}
          onSubmit={submitHandler}
          onChange={changeHandler}
          buttons={[canSubmit && { type: "submit" }]}
        >
          <FormItems items={form.items} />
          {children}
        </AppForm>
      </FormErrorBoundary>
    </section>
  );
}
