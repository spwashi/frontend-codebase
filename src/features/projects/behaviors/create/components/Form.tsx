import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createProject, selectCreateProjectInput} from '../selectors';
import {useCreateProjectMutation} from '../mutations';
import {useDispatch} from 'react-redux';
import {ACTION_PROJECT_CREATED} from '../../../redux/reducer';
import {StandardForm} from '../../../../../components/form/Form';
import {FeatureRequirement} from '../../../../_util';
import {getDomain} from '../../../../../components/form/field/components/Factory';


function ActiveForm() {
    const {send, response} = useCreateProjectMutation();
    const dispatch         = useDispatch();
    const onsubmit         = useMutationFormSubmitCallback(o => send(o).then((o) => {
        dispatch({type: ACTION_PROJECT_CREATED});
        return o;
    }), selectCreateProjectInput);
    return (
        <section id="form__project-create">
            <StandardForm config={form__createProject} onSubmit={onsubmit} defaultValue={{}}/>
            <GraphqlMutationResponse response={response}/>
        </section>
    )
}

export function CreateProjectForm({}) {
    return (
        <FeatureRequirement name="projects.create" alternative={"Need Projects Create"}><ActiveForm/></FeatureRequirement>
    );
}
