import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createTag, selectCreateTagInput} from '../selectors';
import {useCreateTagMutation} from '../mutations';
import {StandardForm} from '../../../../../components/form/Form';
import {ACTION_TAG_CREATED} from '../../../redux/reducer';
import {useDispatch} from 'react-redux';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';

function CreateTagForm() {
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

export function RestrictedCreateTagForm({}) {
    return (
        <LoggedIn>
            <CreateTagForm/>
        </LoggedIn>
    );
}
