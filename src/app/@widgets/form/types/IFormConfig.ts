import {FormFieldConfig} from '../features/fields/types/fieldConfig';

export type IFormConfig =
  {
    formId: `form.${string}`,
    title: string,
    items: FormFieldConfig[];
    defaultValue?: { [k: string]: any }
  }