import {FormFieldConfig} from '../types/fieldConfig';

export const setFieldValue = (f: FormFieldConfig, value: any): FormFieldConfig => {
  return {
    ...f,
    value,
  }
}