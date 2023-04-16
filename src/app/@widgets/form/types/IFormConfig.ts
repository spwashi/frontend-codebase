import {IFormItemConfig} from '../features/fields/types/fieldConfig';

export type IFormConfig =
  {
    formId: `form.${string}`,
    title: string,
    items: IFormItemConfig[];
    defaultValue?: { [k: string]: any }
  }