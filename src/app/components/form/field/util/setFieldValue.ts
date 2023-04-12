import {FormFieldConfig} from '../components/Factory';

export const setFieldValue = (f: FormFieldConfig, value: any): FormFieldConfig => {
  return {
    ...f,
    value,
  }
}