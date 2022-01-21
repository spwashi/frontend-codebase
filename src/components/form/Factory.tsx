import {Input, Value} from './input/text/Input';
import {UsernameInput} from '../../features/users/components/input/UsernameInput';
import React from 'react';
import {SelectInput, SelectOption} from './input/select/SelectInput';
import {FileInput} from './input/files/FileInput';
import {TagSelect} from '../../features/tags/components/Select';
import {ProjectSelect} from '../../features/projects/components/Select';
import {ConceptSelect} from '../../features/concepts/components/Select';
import {FormContext} from './context/FormContext';
import {FileSelector} from '../../features/files/components/input/FileSelector';
import {Textarea} from './input/text/Textarea';
import css from './styles/form.module.scss'
import './styles/form.scss';

export type FormConfig =
    {
        id?: string,
        title?: string,
        items: FormElementConfig[];
        defaultValue?: { [k: string]: any }
    }

type ProjectSelectInputConfig = { type: 'project'; ignoreActive?: boolean };
type UserSelectInputConfig = { type: 'user'; ignoreLogin?: boolean };
type PasswordInputConfig = { type: 'password'; };
type LongtextInputConfig = { type: 'longtext'; };
type TextInputConfig = { type: 'text'; };
type ValueInputConfig = { type: 'value'; };
type ConceptInputConfig = { type: 'concept'; };
type FileInputConfig = { type: 'file'; };
type FileSelectInputConfig = { type: 'fileSelect'; username: string };
type TagInputConfig = { type: 'tags'; };
type ContentInputConfig = { type: 'content'; };
type SelectInputConfig = { type: 'select'; options: SelectOption[] };

export type FormElementConfig<T = any> =
    { name: string; title: string; value?: T; }
    &
    (| ValueInputConfig
     | TextInputConfig
     | LongtextInputConfig
     | PasswordInputConfig
     | UserSelectInputConfig
     | ProjectSelectInputConfig
     | ConceptInputConfig
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
    title: string;
    value: any;
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
export function FormElementFactory({item: config}: { item: FormElementConfig }) {
    const {title, type, name, value: v, ...rest} = config;
    const value                                  = undefined;

    switch (name) {
        case 'domain':
            const domain = getDomain();
            return (
                <Value formKey={name} value={domain} placeholder={title}>{domain}</Value>
            )
    }

    switch (type) {
        case 'password':
        case 'text': {
            return (
                <Input
                    value={value}
                    formKey={name}
                    type={type}
                    placeholder={title}
                />
            );
        }
        case 'value': {
            return (
                <Value formKey={name} value={value} placeholder={title}>{value}</Value>
            );
        }
        case 'concept': {
            return (
                <ConceptSelect
                    formKey={name}
                />
            )
        }
        case 'longtext': {
            return (
                <Textarea
                    value={value}
                    formKey={name}
                    type={type}
                    placeholder={title}
                />
            )
        }
        case 'select': {
            return (
                <SelectInput
                    formKey={name}
                    placeholder={title}
                    options={config.options}
                    value={value}
                />
            );

        }
        case 'tags': {
            return (
                <TagSelect
                    formKey={name}
                />
            )
        }
        case 'project': {
            const config = rest as ProjectSelectInputConfig;
            return (
                <ProjectSelect
                    formKey={name}
                    ignore={config.ignoreActive}
                />
            )
        }
        case 'content':
            return (
                <FormContext.Consumer>{
                    ({data}) => {
                        return <Content
                            data={data}
                            name={name}
                            title={title}
                            value={value}
                        />
                    }
                }</FormContext.Consumer>

            )
        case 'fileSelect': {
            const {username} = config;
            return <FileSelector formKey="file" username={username}/>;
        }
        case 'file': {
            return <FileInput formKey={name} multiple placeholder={title}/>;
        }
        case 'user': {
            return <UsernameInput doSelect ignoreLogin={config.ignoreLogin}/>
        }
    }
}

/**
 *
 * @param items
 * @constructor
 */
export function FormBody({items}: { items: FormElementConfig[] }) {
    return <>{items.map(item => <FormElementFactory item={item} key={item.name}/>)}</>
}