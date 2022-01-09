import React, {useState} from 'react';
import {FormContextProvider} from '../../../../components/form/FormContext';
import {Concept} from '../graphql/components/one';
import {ConceptSelect} from '../Select';
import {FeatureRequirement} from '../../../_util';

export function ConceptDisplay({}) {
    const [state, setState] = useState<any | null>();
    const title             = state?.data?.concept?.title;
    return (
        <FeatureRequirement name="concepts.display">
            <section>
                <header>Concept Display</header>

                <FormContextProvider onSubmit={setState}>
                    <ConceptSelect formKey="concept"/>
                </FormContextProvider>

                {title && <Concept title={title}/>}
            </section>
        </FeatureRequirement>
    )
}