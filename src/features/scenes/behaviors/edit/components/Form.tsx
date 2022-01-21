import React, {useEffect, useMemo, useRef, useState} from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editScene, selectEditSceneInput} from '../config';
import {useEditSceneMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/State';
import {IScene} from '../../../../../app/models/scene/models';
import {Log} from '../../../../../components/Log';
import {FormContextProvider} from '../../../../../components/form/context/FormContext';
import {SceneSelect} from '../../../components/Select';

function ActiveForm() {
    const {send, response}         = useEditSceneMutation();
    const onsubmit                 = useMutationFormSubmitCallback(send, selectEditSceneInput);
    const [{data}, setData]        = useState<any | null>({});
    const scene: IScene | null = data?.scene ?? null;
    const defaultForm              = useMemo(() => JSON.parse(JSON.stringify(form__editScene)), []);
    const form                     = useRef(defaultForm)

    const [eff, setEff] = useState({} as any | null);

    const [{data: {scene: _scene} = {} as any} = {} as any, setScene] = useState({} as any);
    useEffect(() => {
        if (!_scene) return;

        const out = {} as any;
        console.log(form.current)


        form.current
            .items
            .forEach((item: any) => {
                const name = item.name;

                if (eff[name]) item.value = undefined;

                if (name === 'scene') {
                    item.value = _scene;
                    return;
                }
                const val = (_scene as any)[name];
                if (!_scene.hasOwnProperty(name)) return;


                out[name]  = val;
                item.value = val
            })
        setEff(out)
    }, [_scene]);
    return (
        <>
            <FormContextProvider onChange={setScene}>
                <SceneSelect formKey="scene"/>
            </FormContextProvider>
            {_scene && <StandardForm form={form.current} onSubmit={onsubmit} onChange={setData}/>}
            <GraphqlMutationResponse response={response}/>
        </>
    )
}

export function EditSceneForm({}) {
    return (
        <LoggedIn>
            <ActiveForm/>
        </LoggedIn>

    );
}
