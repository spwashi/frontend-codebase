import { IFormItemConfig } from "../features/fields/types/fieldConfig";

export type IFormConfig<
  ValueStruct = any,
  Items extends IFormItemConfig<
    keyof ValueStruct,
    ValueStruct[keyof ValueStruct]
  >[] = IFormItemConfig<keyof ValueStruct, ValueStruct[keyof ValueStruct]>[]
> = {
  formId: `form--${string}`;
  title: string;
  items: Items;
  defaultValue?: Partial<ValueStruct>;
};

type Example = { key1: "something"; key2: "another" };

let formConfig: IFormConfig<Example> = {
  formId: "form--something",
  title: "something",
  items: [{ name: "key2", type: "asset", value: "another" }],
};
