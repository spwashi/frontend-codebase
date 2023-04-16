import React, {useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useDispatch, useSelector} from 'react-redux';
import {ACTION_RECEIVE_LOGIN, selectLoggedInUserName} from '../../redux/reducer';
import {LOGIN_MUTATION, selectLoginInput} from '../../selectors';
import {FormWidget} from '@widgets/form/FormWidget';
import {IUser} from '@junction/models/user/models';
import {Feature} from '@services/features/item/components/Feature';
import {setJwt} from '@services/jwt/helpers/setJwt';

import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {form__login} from '@features/users/behaviors/login/config';
import {featureId__userLogin, featureId__userLoginForm} from '../../../../../../@/featureIds';


function LoginReceivedEffect({username, user, jwt}: { username: string, user: IUser, jwt: string }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!jwt || !username) {
      return;
    }
    setJwt(jwt);
    dispatch({
               type:    ACTION_RECEIVE_LOGIN,
               payload: {username, user, jwt},
             });
  }, [jwt, username, dispatch]);
  return <></>
}

function ActiveForm() {
  const [send, response]    = useMutation(LOGIN_MUTATION);
  const onsubmit            = useMutationFormSubmitCallback(send, selectLoginInput);
  const resp                  = response?.data?.logIn ?? {};
  const {username, jwt, user} = resp;

  return (
    <>
      <LoginReceivedEffect jwt={jwt} username={username} user={user}/>
      <FormWidget config={form__login} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </>
  )
}
export function LoginForm({alt}: { alt?: any }) {
  const loggedInUser = useSelector(selectLoggedInUserName);
  if (loggedInUser) return alt ?? null;
  return (
    <Feature name={featureId__userLoginForm}>
      <FeatureRequirement name={featureId__userLogin} alternative={'Need Users'}>
        <ActiveForm/>
      </FeatureRequirement>
    </Feature>
  );
}
