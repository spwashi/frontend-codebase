import {FormFieldConfig} from '../components/FieldFactory';

export const setFieldValue = (f: FormFieldConfig, value: any): FormFieldConfig => {
  return {
    ...f,
    value,
  }
}