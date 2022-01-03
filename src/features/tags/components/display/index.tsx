import React, {useState} from 'react';
import {FormContextProvider} from '../../../../components/form/FormContext';
import {Tag} from '../query/one';
import {TagSelect} from '../Select';

export function TagDisplay() {
    const [state, setState] = useState<any | null>();
    const title             = state?.tag?.title;
    return (
        <section>
            <header>Tag Display</header>

            <FormContextProvider onSubmit={setState}>
                <TagSelect formKey="tag"/>
            </FormContextProvider>

            {title && <Tag title={title}/>}
        </section>
    )
}