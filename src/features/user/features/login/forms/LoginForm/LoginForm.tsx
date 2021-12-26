import React, {useEffect} from 'react';
import {gql, useMutation} from '@apollo/client';
import {UserSelector} from '../../../../components/UserSelector';
import {useMutationFormSubmitCallback} from '../../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {Input} from '../../../../../../components/form/input/text/Input';
import {FormContextProvider} from '../../../../../../components/form/FormContext';
import {GraphqlMutationResponse} from '../../../../../../services/graphql/GraphqlMutationResponse';
import {setJwt} from '../../../../../jwt';
import {useDispatch, useSelector} from 'react-redux';
import {ACTION_RECEIVE_LOGIN, selectLoggedInUserName} from '../../redux/reducer';

const LOGIN_MUTATION = gql`
    mutation LogIn($user: UserInput, $password: PasswordInput) {
        logIn(user: $user, password: $password) {
            jwt
            username
        }
    }
`;

function selectMutationInput(data: any) {
    const {username, password} = data ?? {};
    return {
        user:     {username},
        password: {password},
    };
}

function UsernameInput({doSelect = false}: { doSelect?: boolean }) {
    return <>
        {
            doSelect
            ? <UserSelector formKey="username"/>
            : <Input formKey="username" placeholder="Username"/>
        }
    </>;
}
function LoginReceivedEffect({username, jwt}: { username: string, jwt: string }) {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!jwt || !username) return;
        setJwt(jwt)
        dispatch({type: ACTION_RECEIVE_LOGIN, payload: username})
    }, [jwt]);
    return <></>
}
function ActiveForm() {
    const [send, response] = useMutation(LOGIN_MUTATION);
    const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
    let resp               = response?.data?.logIn ?? {};
    let {username, jwt}    = resp;

    return (
        <>
            <LoginReceivedEffect jwt={jwt} username={username}/>

            <section id="form__login">
                <header>Login Form</header>
                <FormContextProvider onSubmit={onsubmit}>
                    <UsernameInput doSelect/>
                    <Input formKey="password" type="password" placeholder="Password"/>
                    <button type="submit">submit</button>
                    <GraphqlMutationResponse response={response}/>
                </FormContextProvider>
            </section>
        </>
    )
}
export function LoginForm() {
    const loggedInUser = useSelector(selectLoggedInUserName);
    if (loggedInUser) return null;
    return <ActiveForm/>;
}
