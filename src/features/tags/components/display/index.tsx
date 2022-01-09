import React, {useState} from 'react';
import {FormContextProvider} from '../../../../components/form/FormContext';
import {Tag} from '../query/one';
import {TagSelect} from '../Select';
import {ITag} from '../../../../models/tag/models';

export function TagDisplay() {
    const [state, setState] = useState<any | null>();
    const title             = state?.data?.tags;
    return (
        <section>
            <header>Tag Display</header>

            <FormContextProvider onSubmit={setState}>
                <TagSelect formKey="tags"/>
            </FormContextProvider>

            {title && title.map(({title}: ITag) => <Tag title={title} key={title}/>)}
        </section>
    )
}