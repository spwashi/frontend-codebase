import React, {useState} from 'react';
import {FormContextProvider} from '../../../../components/form/context/FormContext';
import {Scene} from '../graphql/one';
import {SceneSelect} from '../Select';
import {FeatureRequirement} from '../../../_util';
import {Log} from '../../../../components/Log';

export function SceneDisplayForm({}) {
    const [state, setState] = useState<any | null>();
    const id                = state?.data?.scene?.id;
    return (
        <FeatureRequirement name="scenes.display">
            <section>
                <header>Scene Display</header>
<Log>{state}</Log>
                <FormContextProvider onSubmit={setState}>
                    <SceneSelect formKey="scene"/>
                </FormContextProvider>

                {id && <Scene id={id}/>}
            </section>
        </FeatureRequirement>
    )
}