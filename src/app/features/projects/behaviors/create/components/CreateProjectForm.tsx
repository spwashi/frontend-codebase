import React, {useState} from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createProject, selectCreateProjectInput} from '../selectors';
import {useCreateProjectMutation} from '../mutations';
import {useDispatch} from 'react-redux';
import {ACTION_PROJECT_CREATED} from '../../../redux/reducer';
import {StandardForm} from '../../../../../components/form/Form';
import {FeatureRequirement} from '../../../../_util';
import {ErrorBoundary} from '../../../../../components/error';


function ActiveForm() {
  const {send, response}  = useCreateProjectMutation();
  const dispatch          = useDispatch();
  const [fatal, setFatal] = useState<any>(null);
  const onsubmit          = useMutationFormSubmitCallback(o => send(o).then((o) => { dispatch({type: ACTION_PROJECT_CREATED}); }).catch(e => {
    console.log(e);
  }), selectCreateProjectInput);
  return (
    <section id="form__project-create">
      {fatal && <button onClick={e => (setFatal(null), response.reset())}>[clear]</button>}
      <ErrorBoundary handler={e => setFatal(e)} error={fatal}>
        <StandardForm
          config={form__createProject}
          onReset={() => response.reset()}
          onSubmit={onsubmit}
          defaultValue={{}}
        />
        <GraphqlMutationResponse response={response}/>
      </ErrorBoundary>
    </section>
  )
}

export function CreateProjectForm({}) {
  return (
    <FeatureRequirement name="projects.create" alternative={'Need Projects Create'}>
      <ActiveForm/>
    </FeatureRequirement>
  );
}
