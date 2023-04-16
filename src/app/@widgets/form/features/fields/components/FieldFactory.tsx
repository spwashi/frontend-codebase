import {Input, Value} from './input/text/Input';
import {UsernameInput} from '@features/users/components/input/UsernameInput';
import React, {useContext, useMemo} from 'react';
import {SelectInput} from './input/select/SelectInput';
import {FileInput} from './input/file/FileInput';
import {TagSelect} from '@features/tags/components/form/Select';
import {ProjectSelect} from '@features/projects/components/form/Select';
import {ConceptSelect} from '@features/concepts/components/form/Select';
import {FormContext} from '../../../context/context';
import {AssetSelect} from '@features/assets/components/form/Select';
import {Textarea} from './input/text/Textarea';
import {EventSelect} from '@features/events/components/form/Select';
import {SceneSelect} from '@features/scenes/components/form/Select';
import {ContentInput} from './input/ContentInput';
import {FormWidget} from '../../../FormWidget';
import {useFormItem} from '../hooks/useFormItem';
import {getConfiguredDomain} from '@core/dev/components/Dev';
import {FormFieldConfig} from '../types/fieldConfig';
import {IFormConfig} from '../../../types/IFormConfig';

/**
 *
 */
export function getDomain() {
  return getConfiguredDomain() || (window?.location?.host ?? '');
}

function SubformInput({formKey, config}: { formKey: string, config: IFormConfig }) {
  const form                         = useContext(FormContext);
  const [formState, updateFormState] = useFormItem(form, formKey)

  return <FormWidget config={config} defaultValue={formState} onSubmit={updateFormState}/>
}

function FormItemFactory({item: config}: { item: FormFieldConfig }) {
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
      return <ProjectSelect formKey={name} {...rest}/>;
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
      return <SubformInput formKey={name} config={config.config}/>
    }
    default :
      return <>NO HANDLER</>;
  }
}

export default function FormItems({items}: { items: FormFieldConfig[] }) {
  const id = useMemo(() => `input--${Math.random()}`.replace('.', ''), []);
  if (!items) return null;
  return <>{items.map(item => {
    item.id = id + item.name;

    const doLabel = item.type !== 'value'

    return (
      <div key={item.name} className="input-wrapper">
        {doLabel && <label htmlFor={item.id}>{item.title}</label>}
        <div className="form-item">
          <FormItemFactory item={item} key={item.name}/>
        </div>
      </div>
    );
  })}</>
}