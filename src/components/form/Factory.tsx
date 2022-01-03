import {Input} from './input/text/Input';
import {UsernameInput} from '../../features/users/components/input/UsernameInput';
import React from 'react';
import {SelectInput} from './input/select/SelectInput';
import {FileInput} from './input/files/FileInput';
import {TagSelect} from '../../features/tags/components/Select';
import {ProjectSelect} from '../../features/projects/components/Select';

export type FormConfig =
    | { type: 'text'; name: string; title: string; }
    | { type: 'password'; name: string; title: string; }
    | { type: 'user'; name: string; title: string; }
    | { type: 'project'; name: string; title: string; }
    | { type: 'file'; name: string; title: string; }
    | { type: 'tags'; name: string; title: string; }
    | { type: 'select'; name: string; title: string; options: { title: string, value: string }[] }

export function FormElementFactory({item: config}: { item: FormConfig }) {
    const {title, type, name} = config;
    switch (type) {
        case 'password':
        case 'text':
            return <Input formKey={name} type={type} placeholder={title}/>
        case 'select':
            return <SelectInput formKey={name} placeholder={title} options={config.options}/>;
        case 'tags':
            return <TagSelect formKey={name}/>
        case 'project':
            return <ProjectSelect formKey={name}/>
        case 'file':
            return <FileInput formKey={name} multiple placeholder={title}/>;
        case 'user':
            return <UsernameInput doSelect/>
    }
}

export function FormBody({items}: { items: FormConfig[] }) {
    return <>{items.map(item => <FormElementFactory item={item} key={item.name}/>)}</>
}