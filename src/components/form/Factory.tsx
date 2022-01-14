import {Input} from './input/text/Input';
import {UsernameInput} from '../../features/users/components/input/UsernameInput';
import React, {useContext} from 'react';
import {SelectInput} from './input/select/SelectInput';
import {FileInput} from './input/files/FileInput';
import {TagSelect} from '../../features/tags/components/Select';
import {ProjectSelect} from '../../features/projects/components/Select';
import {ConceptSelect} from '../../features/concepts/components/Select';
import {FormContext} from './FormContext';
import {FileSelector} from '../../features/files/components/input/FileSelector';
import {Textarea} from './input/text/Textarea';
import css from './styles/form.module.scss'
import './styles/form.scss';

export type FormConfig =
    {
        id?: string,
        title?: string,
        items: FormElementConfig[]
    }

export type FormElementConfig =
    { name: string; title: string; value?: any; }
    &
    (
        | { type: 'text'; }
        | { type: 'longtext'; }
        | { type: 'password'; }
        | { type: 'user'; }
        | { type: 'project'; }
        | { type: 'concept'; }
        | { type: 'file'; }
        | { type: 'fileSelect'; username: string }
        | { type: 'tags'; }
        | { type: 'content'; }
        | { type: 'select'; options: { title: string, value: string }[] }
        )

export function getDomain() {
    return window?.location?.host ?? '';
}
export function FormElementFactory({item: config}: { item: FormElementConfig }) {
    const form                       = useContext(FormContext);
    const {title, type, name, value} = config;
    switch (name) {
        case 'domain':
            return (
                <Input
                    formKey={name}
                    value={getDomain()}
                    disabled
                    placeholder={title}
                />
            )
    }
    switch (type) {
        case 'password':
        case 'text':
            return (
                <Input
                    value={value}
                    formKey={name}
                    type={type}
                    placeholder={title}
                />
            )
        case 'concept':
            return (
                <ConceptSelect
                    formKey={name}
                />
            )
        case 'longtext':
            return (
                <Textarea
                    value={value}
                    formKey={name}
                    type={type}
                    placeholder={title}
                />
            )
        case 'select':
            return (
                <SelectInput
                    formKey={name}
                    placeholder={title}
                    options={config.options}
                    value={value}
                />
            );
        case 'tags':
            return (
                <TagSelect
                    formKey={name}
                />
            )
        case 'project':
            return (
                <ProjectSelect
                    formKey={name}
                />
            )
        case 'content':
            return (
                <FormContext.Consumer>{
                    ({data}) => {
                        const {mimeType} = data
                        switch (mimeType) {
                            case 'text/plain':
                                return (
                                    <Input
                                        formKey={name}
                                        placeholder={title}
                                    />
                                )
                            case 'text/spw':
                                return (
                                    <Input
                                        formKey={name}
                                        placeholder={title}
                                        type="spw"
                                    />
                                )
                            case 'text/rich':
                                return (
                                    <Input
                                        formKey={name}
                                        placeholder={title}
                                        type="rich"
                                    />
                                )
                            case 'text/long':
                                return (
                                    <Textarea
                                        formKey={name}
                                        placeholder={title}
                                    />
                                )
                            default:
                                break;
                        }
                        return <div className={css.error}>[please set the content type]</div>
                    }
                }</FormContext.Consumer>

            )
        case 'fileSelect':
            const {username} = config;
            return <FileSelector formKey="file" username={username}/>;
        case 'file':
            return <FileInput formKey={name} multiple placeholder={title}/>;
        case 'user':
            return <UsernameInput doSelect/>
    }
}

export function FormBody({items}: { items: FormElementConfig[] }) {
    return <>{items.map(item => <FormElementFactory item={item} key={item.name}/>)}</>
}