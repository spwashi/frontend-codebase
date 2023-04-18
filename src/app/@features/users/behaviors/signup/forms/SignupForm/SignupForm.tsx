import React from 'react';
import {useMutation} from '@apollo/client';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {useSelector} from 'react-redux';
import {selectLoggedInUserName} from '../../../login/redux/reducer';
import {Feature} from '@services/features/item/components/Feature';
import {FormWidget} from '@widgets/form/FormWidget';

import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {form__userSignup} from '@features/users/behaviors/signup/config';
import {featureId__projectDisplay, featureId__userSignup, featureId__userSignupForm} from '../../../../../../@/featureIds';
import {gqlMutationNode_SIGNUP} from '@features/users/services/graphql/one/mutations/signup';
import {selectMutationInput} from '@features/users/behaviors/signup/selectors';


function ActiveForm() {
  const [send, response] = useMutation(gqlMutationNode_SIGNUP);
  const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
  return (
    <React.Fragment>
      <FormWidget config={form__userSignup} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </React.Fragment>
  )
}
export function SignupForm() {
  const loggedInUser = useSelector(selectLoggedInUserName);
  if (loggedInUser) return null;
  return (
    <FeatureRequirement name={featureId__userSignup} alternative={'Need User Signup'}>
      <Feature name={featureId__userSignupForm}>
        <FeatureRequirement name={featureId__projectDisplay} alternative={'Need Projects'}>
          <ActiveForm/>
        </FeatureRequirement>
      </Feature>
    </FeatureRequirement>
  );
}
