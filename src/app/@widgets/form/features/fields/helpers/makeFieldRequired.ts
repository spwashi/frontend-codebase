import {FormFieldConfig} from '../types/fieldConfig';

export const makeFieldRequired = (f: FormFieldConfig): FormFieldConfig => {
  return {
    ...f,
    validators: {
      ...f.validators,
      onChange: [
        ...f.validators?.onChange ?? [],
        ({data}) => {
          const val = data?.[f.name];
          if (typeof val === 'string') return !!val.length;
          return !!val;
        },
      ],
    },
  }
}