import {SelectOption} from '../components/input/select/SelectInput';
import {ContentType} from '@features/concepts/data/config/contentTypes';
import {IFormConfig} from '../../../types/IFormConfig';

type ProjectSelectInputConfig =
  IFieldConfig
  & { type: 'project'; ignore?: boolean };
type UserSelectInputConfig =
  IFieldConfig
  & { type: 'user'; ignoreLogin?: boolean; doSelect?: boolean };
type PasswordInputConfig =
  IFieldConfig
  & { type: 'password'; };
type LongtextInputConfig =
  IFieldConfig
  & { type: 'longtext'; };
type TextInputConfig =
  IFieldConfig
  & { type: 'text'; };
type DateInputConfig =
  IFieldConfig
  & { type: 'date'; };
type DatetimeInputConfig =
  IFieldConfig
  & { type: 'datetime-local'; };
type ValueInputConfig =
  IFieldConfig
  & { type: 'value'; calc?: (data: any) => any };
type ConceptInputConfig =
  IFieldConfig
  & { type: 'concept'; };
type SceneInputConfig =
  IFieldConfig
  & { type: 'scene'; };
type EventInputConfig =
  IFieldConfig
  & { type: 'event'; };
type AssetInputConfig =
  IFieldConfig
  & { type: 'asset'; multiple?: boolean };
type AssetSelectInputConfig =
  IFieldConfig
  & { type: 'assetSelect'; username: string };
type TagInputConfig =
  IFieldConfig
  & { type: 'tags'; };
type FormInputConfig =
  IFieldConfig
  & { type: 'form', config: IFormConfig }
type ContentInputConfig =
  IFieldConfig
  & { type: 'content'; contentType?: ContentType };
type SelectInputConfig =
  IFieldConfig
  & { type: 'select'; options: SelectOption[] };

type IFieldConfig<T = any> = {
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


export type IFormItemConfig<T = any> = (| ValueInputConfig
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