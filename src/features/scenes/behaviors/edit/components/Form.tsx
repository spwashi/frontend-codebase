import React, {useState} from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editScene, selectEditSceneInput} from '../config';
import {useEditSceneMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';
import {FormContextProvider} from '../../../../../components/form/context/FormContext';
import {SceneSelect} from '../../../components/Select';

function EditSceneForm() {
    const {send, response}  = useEditSceneMutation();
    const onsubmit          = useMutationFormSubmitCallback(send, selectEditSceneInput);
    const [{data}, setData] = useState<any | null>({});

    const [{data: {scene: _scene} = {} as any} = {} as any, setScene] = useState({} as any);
    return (
        <>
            <FormContextProvider onChange={setScene}>
                <SceneSelect formKey="scene"/>
            </FormContextProvider>
            {
                _scene &&
                <StandardForm
                  form={form__editScene}
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
