import {Input, Value} from './input/text/Input';
import {UsernameInput} from '../../../../../_features/users/components/input/UsernameInput';
import React, {useContext, useMemo} from 'react';
import {SelectInput, SelectOption} from './input/select/SelectInput';
import {FileInput} from './input/file/FileInput';
import {TagSelect} from '../../../../../_features/tags/components/form/Select';
import {ProjectSelect} from '../../../../../_features/projects/components/form/Select';
import {ConceptSelect} from '../../../../../_features/concepts/components/form/Select';
import {FormContext} from '../../../context/context';
import {AssetSelect} from '../../../../../_features/assets/components/form/AssetSelect';
import {Textarea} from './input/text/Textarea';
import {EventSelect} from '../../../../../_features/events/components/form/Select';
import {SceneSelect} from '../../../../../_features/scenes/components/form/Select';
import {ContentInput} from './input/ContentInput';
import {ContentType} from '../../../../../_features/concepts/data/config';
import {FormWidget} from '../../../FormWidget';
import {useFormItem} from '../hooks/useFormItem';
import {getConfiguredDomain} from '../../../../../components/dev/Dev';

export type FormConfig =
  {
    formId: string,
    title?: string,
    items: FormFieldConfig[];
    defaultValue?: { [k: string]: any }
  }

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
type FormInputConfig = { type: 'form', config: FormConfig }
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

/**
 *
 */
export function getDomain() {
  return getConfiguredDomain() || (window?.location?.host ?? '');
}

function FormInput({formKey, config}: { formKey: string, config: FormConfig }) {
  const form                         = useContext(FormContext);
  const [formState, updateFormState] = useFormItem(form, formKey)

  return <FormWidget config={config} defaultValue={formState} onSubmit={updateFormState}/>
}

/**
 *
 * @param config
 * @constructor
 */
export function FormElementFactory({item: config}: { item: FormFieldConfig }) {
  const {title, type, name, value: v, ...rest} = config;
  switch (type) {
    case 'date':
    case 'datetime-local':
    case 'password':
    case 'text': {
      return <Input formKey={name} {...config} />;
    }
    case 'value': {
      return <Value formKey={name} {...config}/>;
    }
    case 'concept': {
      return <ConceptSelect formKey={name}/>;
    }
    case 'scene': {
      return <SceneSelect formKey={name}/>;
    }
    case 'event': {
      return <EventSelect formKey={name}/>;
    }
    case 'longtext': {
      return <Textarea formKey={name} {...config} />;
    }
    case 'select': {
      return <SelectInput formKey={name} {...config} />;
    }
    case 'tags': {
      return <TagSelect formKey={name}/>
    }
    case 'project': {
      const config = rest as ProjectSelectInputConfig;
      return <ProjectSelect formKey={name} {...config}/>;
    }
    case 'content': {
      return <FormContext.Consumer>{({data}) => <ContentInput {...config} data={data}/>}</FormContext.Consumer>;
    }
    case 'assetSelect': {
      const {username} = config;
      return <AssetSelect formKey="asset" username={username}/>;
    }
    case 'asset': {
      return <FileInput formKey={name}  {...config}/>;
    }
    case 'user': {
      return <UsernameInput doSelect={!!config.doSelect} ignoreLogin={config.ignoreLogin}/>;
    }
    case 'form': {
      return <FormInput formKey={name} config={config.config}/>
    }
    default :
      return <>NO HANDLER</>;
  }
}

/**
 *
 * @param items
 * @constructor
 */
export function FormBody({items}: { items: FormFieldConfig[] }) {
  const id = useMemo(() => `input--${Math.random()}`.replace('.', ''), []);
  if (!items) return null;
  return <>{items.map(item => {
    item.id = id + item.name;

    const doLabel = item.type !== 'value'

    return (
      <div key={item.name} className="input-wrapper">
        {doLabel && <label htmlFor={item.id}>{item.title}</label>}
        <div className="form-item">
          <FormElementFactory item={item} key={item.name}/>
        </div>
      </div>
    );
  })}</>
}