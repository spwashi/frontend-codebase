import {SelectOption} from '../components/input/select/SelectInput';
import {ContentType} from '@features/concepts/data/config/contentTypes';
import {IFormConfig} from '../../../types/IFormConfig';

type ProjectSelectInputConfig = { type: 'project'; ignore?: boolean };
type UserSelectInputConfig = { type: 'user'; ignoreLogin?: boolean; doSelect?: boolean };
type PasswordInputConfig = { type: 'password'; };
type LongtextInputConfig = { type: 'longtext'; };
type TextInputConfig = { type: 'text'; };
type DateInputConfig = { type: 'date'; };
type DatetimeInputConfig = { type: 'datetime-local'; };
type ValueInputConfig = { type: 'value'; calc?: (data: any) => any };
type ConceptInputConfig = { type: 'concept'; };
type SceneInputConfig = { type: 'scene'; };
type EventInputConfig = { type: 'event'; };
type AssetInputConfig = { type: 'asset'; multiple?: boolean };
type AssetSelectInputConfig = { type: 'assetSelect'; username: string };
type TagInputConfig = { type: 'tags'; };
type FormInputConfig = { type: 'form', config: IFormConfig }
type ContentInputConfig = { type: 'content'; contentType?: ContentType };
type SelectInputConfig = { type: 'select'; options: SelectOption[] };

export type FormFieldConfig<T = any> =
  {
    name: string;
    title?: string;
    value?: T;
    id?: string;
    validators?: {
      onReset?: ((v: T, d: any) => boolean | string)[]
      onChange?: ((v: T, d: any) => boolean | string)[]
      onSubmit?: ((v: T, d: any) => boolean | string)[]
    }
  }
  &
  (| ValueInputConfig
   | TextInputConfig
   | DateInputConfig
   | DatetimeInputConfig
   | LongtextInputConfig
   | PasswordInputConfig
   | UserSelectInputConfig
   | ProjectSelectInputConfig
   | ConceptInputConfig
   | EventInputConfig
   | FormInputConfig
   | SceneInputConfig
   | AssetInputConfig
   | AssetSelectInputConfig
   | TagInputConfig
   | ContentInputConfig
   | SelectInputConfig)