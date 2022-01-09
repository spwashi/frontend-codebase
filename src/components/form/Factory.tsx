import {Input, Textarea} from './input/text/Input';
import {UsernameInput} from '../../features/users/components/input/UsernameInput';
import React from 'react';
import {SelectInput} from './input/select/SelectInput';
import {FileInput} from './input/files/FileInput';
import {TagSelect} from '../../features/tags/components/Select';
import {ProjectSelect} from '../../features/projects/components/Select';
import {ConceptSelect} from '../../features/concepts/components/Select';
import {FormContext} from './FormContext';
import {FileSelector} from '../../features/files/components/input/FileSelector';

export type FormConfig =
    {
        id?: string,
        title?: string,
        items: FormElementConfig[]
    }

export type FormElementConfig =
    | { type: 'text'; name: string; title: string; }
    | { type: 'longtext'; name: string; title: string; }
    | { type: 'password'; name: string; title: string; }
    | { type: 'user'; name: string; title: string; }
    | { type: 'project'; name: string; title: string; }
    | { type: 'concept'; name: string; title: string; }
    | { type: 'file'; name: string; title: string; }
    | { type: 'fileSelect'; name: string; title: string; username: string }
    | { type: 'tags'; name: string; title: string; }
    | { type: 'content'; name: string; title: string; }
    | { type: 'select'; name: string; title: string; options: { title: string, value: string }[] }

export function FormElementFactory({item: config}: { item: FormElementConfig }) {
    const {title, type, name} = config;
    switch (name) {
        case 'domain':
            return <Input formKey={name} value={window?.location?.host} disabled placeholder={title}/>
    }
    switch (type) {
        case 'password':
        case 'text':
            return <Input formKey={name} type={type} placeholder={title}/>
        case 'concept':
            return <ConceptSelect formKey={name}/>
        case 'longtext':
            return <Textarea formKey={name} type={type} placeholder={title}/>
        case 'select':
            return <SelectInput formKey={name} placeholder={title} options={config.options}/>;
        case 'tags':
            return <TagSelect formKey={name}/>
        case 'project':
            return <ProjectSelect formKey={name}/>
        case 'content':
            return (
                <FormContext.Consumer>{
                    ({data}) => {
                        const {mimeType} = data
                        switch (mimeType) {
                            case 'text/plain':
                                return <Input formKey={name} placeholder={title}/>
                            case 'text/spw':
                                return <Textarea formKey={name} placeholder={title}/>
                        }
                        return 'Cannot render component'
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