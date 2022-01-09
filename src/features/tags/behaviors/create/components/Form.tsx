import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {FeatureRequirement} from '../../../../_util';
import {form__createTag, selectCreateTagInput} from '../selectors';
import {useCreateTagMutation} from '../mutations';
import {StandardForm} from '../../../../../components/form/Form';
import {ACTION_TAG_CREATED} from '../../../redux/reducer';
import {useDispatch} from 'react-redux';

function ActiveForm() {
    const {send, response} = useCreateTagMutation();
    const dispatch         = useDispatch();
    const onsubmit         = useMutationFormSubmitCallback(o => send(o).then((o) => {
        dispatch({type: ACTION_TAG_CREATED});
        return o;
    }), selectCreateTagInput);
    return (
        <section id="form__tag-create">
            <StandardForm form={form__createTag} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </section>
    )
}

export function CreateTagForm({}) {
    return (
        <FeatureRequirement name="users.login">
            <ActiveForm/>
        </FeatureRequirement>
    );
}
