import {IFormItemConfig} from '../types/fieldConfig';

export const makeFieldRequired = (f: IFormItemConfig): IFormItemConfig => {
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