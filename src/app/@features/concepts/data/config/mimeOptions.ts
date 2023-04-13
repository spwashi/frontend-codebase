import {SelectOption} from '@widgets/form/features/fields/components/input/select/SelectInput';
import {ContentType, contentTypes} from './contentTypes';

export const mimeOptions = contentTypes.map(title => ({
  title,
  value:   title,
  payload: title,
})) as SelectOption<ContentType>[];