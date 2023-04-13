import {FormFieldConfig} from './fieldConfig';

export type FormConfig =
  {
    formId: string,
    title?: string,
    items: FormFieldConfig[];
    defaultValue?: { [k: string]: any }
  }