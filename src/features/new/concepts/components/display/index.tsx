import React, {useState} from 'react';
import {FormContextProvider} from '../../../../../components/form/FormContext';
import {Concept} from '../query/one';
import {ConceptSelect} from '../Select';

export function ConceptDisplay() {
    const [state, setState] = useState<any | null>();
    const title             = state?.concept?.title;
    return (
        <section>
            <header>Concept Display</header>

            <FormContextProvider onSubmit={setState}>
                <ConceptSelect formKey="concept"/>
                <button type="submit">Submit</button>
            </FormContextProvider>

            {title && <Concept title={title}/>}
        </section>
    )
}