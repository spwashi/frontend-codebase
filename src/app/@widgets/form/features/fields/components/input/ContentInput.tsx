import { ContentType } from "@features/concepts/data/config/contentTypes";
import { Input } from "./text/Input";
import { Textarea } from "./text/Textarea";
import React from "react";

interface ContentParams {
  data: any;
  name: string;
  title?: string;
  value?: any;
  contentType?: ContentType;
}

export function ContentInput({
  data,
  contentType: _contentType,
  name,
  title,
  value,
}: ContentParams) {
  const { contentType: contextMime } = data;
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
