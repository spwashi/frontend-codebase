import React, { useContext } from "react";
import { ContentType } from "@features/concepts/data/config/contentTypes";
import { Input } from "./text/Input";
import { Textarea } from "./text/Textarea";
import { FormContext } from "@widgets/form/context/context";
import { useFormItem } from "@widgets/form/features/fields/hooks/useFormItem";

interface IContentParams {
  formKey: string;
  title?: string;
  value?: any;
  contentType?: ContentType;
}

export function ContentInput({
  contentType: _contentType,
  formKey: name,
  title,
  value,
}: IContentParams) {
  const [{ value: contextMime }] = useFormItem("contentType");
  switch (_contentType ?? contextMime) {
    case "text/spw":
    case "text/plain":
      return <Input formKey={name} placeholder={title} value={value} />;
    case "text/rich":
      return (
        <Input
          value={value}
          formKey={name}
          placeholder={"[type here]"}
          type="rich"
        />
      );
    case "text/long":
      return <Textarea value={value} formKey={name} placeholder={title} />;
    default:
      break;
  }
  return <div className="error">[please set the content type]</div>;
}
