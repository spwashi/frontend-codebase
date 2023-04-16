import {IFormItemConfig} from '../types/fieldConfig';

export const setFieldValue = (f: IFormItemConfig, value: any): IFormItemConfig => {
  return {
    ...f,
    value,
  }
}