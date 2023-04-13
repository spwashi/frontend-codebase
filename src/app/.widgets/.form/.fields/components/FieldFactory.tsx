import {Input, Value} from '../../input/text/Input';
import {UsernameInput} from '../../../../.features/.users/components/input/UsernameInput';
import React, {useContext, useMemo} from 'react';
import {SelectInput, SelectOption} from '../../input/select/SelectInput';
import {AssetInput} from '../../input/assets/AssetInput';
import {TagSelect} from '../../../../.features/.tags/components/form/Select';
import {ProjectSelect} from '../../../../.features/.projects/components/form/Select';
import {ConceptSelect} from '../../../../.features/.concepts/components/form/Select';
import {FormContext} from '../../context/FormContext';
import {AssetSelector} from '../../../../.features/.assets/components/input/AssetSelector';
import {Textarea} from '../../input/text/Textarea';
import {EventSelect} from '../../../../.features/.events/components/form/Select';
import {SceneSelect} from '../../../../.features/.scenes/components/form/Select';
import {ContentInput} from './ContentInput';
import {ContentType} from '../../../../.features/.concepts/data/config';
import {FormWidget} from '../../FormWidget';
import {useFormItem} from '../../hooks/useFormItem';
import {getConfiguredDomain} from '../../../../components/dev/Dev';

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
type DateInputConfig = { type: 'datetime'; };
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
    case 'datetime':
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
      return <AssetSelector formKey="asset" username={username}/>;
    }
    case 'asset': {
      return <AssetInput formKey={name}  {...config}/>;
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