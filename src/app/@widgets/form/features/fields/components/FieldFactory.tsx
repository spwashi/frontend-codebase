import React, { useMemo } from "react";
import { UsernameInput } from "@features/users/components/input/UsernameInput";
import { TagsSelect } from "@features/tags/components/input/TagsSelect";
import { ProjectSelect } from "@features/projects/components/input/ProjectSelect";
import { ConceptSelect } from "@features/concepts/components/input/ConceptSelect";
import { AssetSelect } from "@features/assets/components/input/AssetSelect";
import { EventSelect } from "@features/events/components/input/EventSelect";
import { SceneSelect } from "@features/scenes/components/input/SceneSelect";
import { getConfiguredDomain } from "@core/dev/components/Dev";
import { FormWidget } from "../../../FormWidget";
import { useFormItem } from "../hooks/useFormItem";
import { IFormItemConfig } from "../types/fieldConfig";
import { IFormConfig } from "../../../types/IFormConfig";
import { ContentInput } from "./input/ContentInput";
import { Textarea } from "./input/text/Textarea";
import { SelectInput } from "./input/select/SelectInput";
import { FileInput } from "./input/file/FileInput";
import { Input, Value } from "./input/text/Input";

/**
 *
 */
export function getDomain() {
  return getConfiguredDomain() || (window?.location?.host ?? "");
}

function SubformInput({
  formKey,
  config,
}: {
  formKey: string;
  config: IFormConfig;
}) {
  const [formState, setFormState] = useFormItem(formKey);

  return (
    <FormWidget
      config={config}
      defaultValue={formState}
      onSubmit={setFormState}
    />
  );
}

function FormItemFactory({ item: config }: { item: IFormItemConfig }) {
  const { title, type, name, value: v, ...rest } = config;
  switch (type) {
    case "date":
    case "datetime-local":
    case "password":
    case "text": {
      return <Input formKey={name} {...config} />;
    }
    case "value": {
      return <Value formKey={name} {...config} />;
    }
    case "concept": {
      return <ConceptSelect formKey={name} />;
    }
    case "scene": {
      return <SceneSelect formKey={name} />;
    }
    case "event": {
      return <EventSelect formKey={name} />;
    }
    case "longtext": {
      return <Textarea formKey={name} {...config} />;
    }
    case "select": {
      return <SelectInput formKey={name} {...config} />;
    }
    case "tags": {
      return <TagsSelect formKey={name} />;
    }
    case "project": {
      return <ProjectSelect formKey={name} {...rest} />;
    }
    case "content": {
      return <ContentInput formKey={name} {...config} />;
    }
    case "assetSelect": {
      const { username } = config;
      return <AssetSelect formKey="asset" username={username} />;
    }
    case "asset": {
      return <FileInput formKey={name} {...config} />;
    }
    case "user": {
      return (
        <UsernameInput
          doSelect={!!config.doSelect}
          ignoreLogin={config.ignoreLogin}
        />
      );
    }
    case "form": {
      return <SubformInput formKey={name} config={config.config} />;
    }
    default:
      return <>NO HANDLER</>;
  }
}

export default function FormItems({ items }: { items: IFormItemConfig[] }) {
  const id = useMemo(() => `input--${Math.random()}`.replace(".", ""), []);
  if (!items) return null;
  return (
    <>
      {items.map((item) => {
        item.id = id + item.name;

        const doLabel = item.type !== "value";

        return (
          <div key={item.name} className="input-wrapper">
            {doLabel && <label htmlFor={item.id}>{item.title}</label>}
            <div className="form-item">
              <FormItemFactory item={item} key={item.name} />
            </div>
          </div>
        );
      })}
    </>
  );
}
