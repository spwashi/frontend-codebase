import React, {useEffect} from 'react';

import {SignupForm} from '../features/user/features/signup/forms/SignupForm'
import {LoginForm} from '../features/user/features/login/forms/LoginForm';
import {UploadFileForm} from '../features/file/upload/UploadFileForm';
import {CreateConceptForm} from '../features/user/features/concept/forms/CreateConceptForm';
import {ConceptDisplay} from '../features/user/components/ConceptSelector';
import {CreateProjectForm} from '../features/project/project/forms/CreateProjectForm';
import {ProjectDisplay} from '../features/project/project/components/ProjectSelector';
import {FileDisplay} from '../features/file/display/FileDisplay';
import {BACKEND_URL} from '../constants';
import {clearJwt, useJwt} from '../features/jwt';
import {useDispatch, useSelector} from 'react-redux';
import {ACTION_LOGOUT, selectLoggedInUserName} from '../features/user/features/login/redux/reducer';

function VerifyLogin() {
    const dispatch = useDispatch();
    const jwt      = useJwt();
    useEffect(() => {
        fetch(BACKEND_URL + '/protected', {
            method:  'POST',
            body:    JSON.stringify({token: jwt}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => {
                if (res.status === 200) {
                    return;
                }
                dispatch({type: ACTION_LOGOUT})
                clearJwt();
            })
    }, [jwt]);

    return (
        <div>

        </div>
    );
}
function App() {
    const loggedInUser = useSelector(selectLoggedInUserName);
    return (
        <div className="app">
            {loggedInUser ? <VerifyLogin/> : null}
            <section>
                <CreateProjectForm/>
                <ProjectDisplay/>
            </section>
            {loggedInUser ? null : <section><SignupForm/><LoginForm/></section>}
            <section>
                <CreateConceptForm/>
                <ConceptDisplay/>
            </section>
            <section>
                <UploadFileForm/>
                <FileDisplay/>
            </section>
        </div>
    );
}

export default App;