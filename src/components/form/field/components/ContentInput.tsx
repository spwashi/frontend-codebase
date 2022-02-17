import {ContentType} from '../../../../features/concepts/data/config';
import {Input} from '../../input/text/Input';
import {Textarea} from '../../input/text/Textarea';
import css from '../../styles/form.module.scss';
import React from 'react';

interface ContentParams {
    data: any;
    name: string;
    title?: string;
    value?: any;
    contentType?: ContentType
}

export function ContentInput({data, contentType: _contentType, name, title, value}: ContentParams) {
    const {contentType: contextMime} = data
    switch (_contentType ?? contextMime) {
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