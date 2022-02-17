import React, {useState} from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editScene, selectEditSceneInput} from '../config';
import {useEditSceneMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';
import {Form} from '../../../../../components/form/context/FormContext';
import {SceneSelect} from '../../../components/form/Select';

function EditSceneForm() {
    const {send, response}  = useEditSceneMutation();
    const onsubmit          = useMutationFormSubmitCallback(send, selectEditSceneInput);
    const [{data}, setData] = useState<any | null>({});

    const [{data: {scene: _scene} = {} as any} = {} as any, setScene] = useState({} as any);
    return (
        <>
            <Form onChange={setScene}>
                <SceneSelect formKey="scene"/>
            </Form>
            {
                _scene &&
                <StandardForm
                  config={form__editScene}
                  onSubmit={onsubmit}
                  onChange={setData}
                  defaultValue={_scene}
                />
            }
            <GraphqlMutationResponse response={response}/>
        </>
    )
}

export function RestrictedEditSceneForm({}) {
    return (
        <LoggedIn>
            <EditSceneForm/>
        </LoggedIn>

    );
}
