import {Input, Value} from '../../input/text/Input';
import {UsernameInput} from '../../../../features/users/components/input/UsernameInput';
import React, {useContext, useMemo} from 'react';
import {SelectInput, SelectOption} from '../../input/select/SelectInput';
import {FileInput} from '../../input/files/FileInput';
import {TagSelect} from '../../../../features/tags/components/Select';
import {ProjectSelect} from '../../../../features/projects/components/Select';
import {ConceptSelect} from '../../../../features/concepts/components/Select';
import {FormContext} from '../../context/FormContext';
import {FileSelector} from '../../../../features/assets/components/input/FileSelector';
import {Textarea} from '../../input/text/Textarea';
import css from '../../styles/form.module.scss'
import '../../styles/form.scss';
import {EventSelect} from '../../../../features/events/components/Select';
import {SceneSelect} from '../../../../features/scenes/components/Select';

export type FormConfig =
    {
        formId: string,
        title?: string,
        items: FormFieldConfig[];
        defaultValue?: { [k: string]: any }
    }

type ProjectSelectInputConfig = { type: 'project'; ignore?: boolean };
type UserSelectInputConfig = { type: 'user'; ignoreLogin?: boolean };
type PasswordInputConfig = { type: 'password'; };
type LongtextInputConfig = { type: 'longtext'; };
type TextInputConfig = { type: 'text'; };
type DateInputConfig = { type: 'datetime'; };
type ValueInputConfig = { type: 'value'; calc?: (data: any) => any };
type ConceptInputConfig = { type: 'concept'; };
type SceneInputConfig = { type: 'scene'; };
type EventInputConfig = { type: 'event'; };
type FileInputConfig = { type: 'file'; multiple?: boolean };
type FileSelectInputConfig = { type: 'fileSelect'; username: string };
type TagInputConfig = { type: 'tags'; };
type ContentInputConfig = { type: 'content'; };
type SelectInputConfig = { type: 'select'; options: SelectOption[] };

export type FormFieldConfig<T = any> =
    {
        name: string;
        title?: string;
        value?: T;
        id?: string;
        validators?: {
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
     | SceneInputConfig
     | FileInputConfig
     | FileSelectInputConfig
     | TagInputConfig
     | ContentInputConfig
     | SelectInputConfig)

/**
 *
 */
export function getDomain() {
    return window?.location?.host ?? '';
}

interface ContentParams {
    data: any;
    name: string;
    title?: string;
    value?: any;
}

function Content({data, name, title, value}: ContentParams) {
    const {mimeType} = data
    switch (mimeType) {
        case 'text/plain':
            return (
                <Input
                    formKey={name}
                    placeholder={title}
                    value={value}
                />
            )
        case 'text/spw':
            return (
                <Input
                    value={value}
                    formKey={name}
                    placeholder={title}
                    type="spw"
                />
            )
        case 'text/rich':
            return (
                <Input
                    value={value}
                    formKey={name}
                    placeholder={title}
                    type="rich"
                />
            )
        case 'text/long':
            return (
                <Textarea
                    value={value}
                    formKey={name}
                    placeholder={title}
                />
            )
        default:
            break;
    }
    return <div className={css.error}>[please set the content type]</div>
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
        case 'content':
            return <FormContext.Consumer>{({data}) => <Content {...config} data={data}/>}</FormContext.Consumer>;
        case 'fileSelect': {
            const {username} = config;
            return <FileSelector formKey="file" username={username}/>;
        }
        case 'file': {
            return <FileInput formKey={name}  {...config}/>;
        }
        case 'user': {
            return <UsernameInput doSelect ignoreLogin={config.ignoreLogin}/>;
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
    return <>{items.map(item => {
        item.id = id + item.name;

        const doLabel = item.type !== 'value'

        return (
            <div key={item.name}>
                {doLabel && <label htmlFor={item.id}>{item.title}</label>}
                <div className="form-item">
                    <FormElementFactory item={item} key={item.name}/>
                </div>
            </div>
        );
    })}</>
}