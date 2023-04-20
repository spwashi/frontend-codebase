import { ContentType } from "@features/concepts/data/config/contentTypes";
import { SelectOption } from "../components/input/select/SelectInput";
import { IFormConfig } from "../../../types/IFormConfig";

type ProjectSelectInputConfig<T> = IFieldConfig<T> & {
  type: "project";
  ignore?: boolean;
};
type UserSelectInputConfig<T> = IFieldConfig<T> & {
  type: "user";
  ignoreLogin?: boolean;
  doSelect?: boolean;
};
type PasswordInputConfig<T> = IFieldConfig<T> & { type: "password" };
type LongtextInputConfig<T> = IFieldConfig<T> & { type: "longtext" };
type TextInputConfig<T> = IFieldConfig<T> & { type: "text" };
type DateInputConfig<T> = IFieldConfig<T> & { type: "date" };
type DatetimeInputConfig<T> = IFieldConfig<T> & { type: "datetime-local" };
type ValueInputConfig<T> = IFieldConfig<T> & {
  type: "value";
  calc?: (data: any) => any;
};
type ConceptInputConfig<T> = IFieldConfig<T> & { type: "concept" };
type SceneInputConfig<T> = IFieldConfig<T> & { type: "scene" };
type EventInputConfig<T> = IFieldConfig<T> & { type: "event" };
type AssetInputConfig<T> = IFieldConfig<T> & {
  type: "asset";
  multiple?: boolean;
};
type AssetSelectInputConfig<T> = IFieldConfig<T> & {
  type: "assetSelect";
  username: string;
};
type TagInputConfig<T> = IFieldConfig<T> & { type: "tags" };
type FormInputConfig<T> = IFieldConfig<T> & {
  type: "form";
  config: IFormConfig;
};
type ContentInputConfig<T> = IFieldConfig<T> & {
  type: "content";
  contentType?: ContentType;
};
type SelectInputConfig<T> = IFieldConfig<T> & {
  type: "select";
  options: SelectOption[];
};

type IFieldConfig<ValueType> = {
  name: string;
  title?: string;
  value?: ValueType;
  id?: string;
  validators?: {
    onReset?: ((v: ValueType, d: any) => boolean | string)[];
    onChange?: ((v: ValueType, d: any) => boolean | string)[];
    onSubmit?: ((v: ValueType, d: any) => boolean | string)[];
  };
};

export type IFormItemConfig<Name = string, ValueType = any> = {
  name: Name;
} & (
  | ValueInputConfig<ValueType>
  | TextInputConfig<ValueType>
  | DateInputConfig<ValueType>
  | DatetimeInputConfig<ValueType>
  | LongtextInputConfig<ValueType>
  | PasswordInputConfig<ValueType>
  | UserSelectInputConfig<ValueType>
  | ProjectSelectInputConfig<ValueType>
  | ConceptInputConfig<ValueType>
  | EventInputConfig<ValueType>
  | FormInputConfig<ValueType>
  | SceneInputConfig<ValueType>
  | AssetInputConfig<ValueType>
  | AssetSelectInputConfig<ValueType>
  | TagInputConfig<ValueType>
  | ContentInputConfig<ValueType>
  | SelectInputConfig<ValueType>
);
