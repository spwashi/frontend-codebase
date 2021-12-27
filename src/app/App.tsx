import React from 'react';

import {SignupForm} from '../features/user/features/signup/forms/SignupForm'
import {LoginForm} from '../features/user/features/login/forms/LoginForm';
import {UploadFileForm} from '../features/file/upload/UploadFileForm';
import {CreateConceptForm} from '../features/user/features/concept/forms/CreateConceptForm';
import {ConceptDisplay} from '../features/user/components/ConceptSelector';
import {CreateProjectForm} from '../features/project/project/forms/CreateProjectForm';
import {ProjectDisplay} from '../features/project/project/components/ProjectSelector';
import {FileDisplay} from '../features/file/display/FileDisplay';
import {VerifyLogin} from '../features/user/features/login/VerifyLogin';
import {LogoutButton} from '../features/user/features/login/Logout';
import {Feature, FeatureRequirement, FeaturesContext} from '../features/context';
import {LoggedIn, NotLoggedIn} from '../features/user/features/login/State';
import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../features/user/redux/selectors';
import {AllUsersQuery} from '../features/user/components/AllUsersQuery';


const AppFeatures = (() => {
    const lastFetched = useSelector(selectPossibleUsersLastFetched)
    const list        = useSelector(selectPossibleUsersList)
    return (
        <>
            <AllUsersQuery/>
            <Feature name="projects" enabled={true}>
                <Feature name="users">
                    <Feature name="users.login" enabled={lastFetched ? !!list.length : false}/>
                    <Feature name="users.signup"/>
                </Feature>
                <Feature name="files"/>
            </Feature>
            <Feature name="concepts"/>
        </>
    );
});

function App() {
    const lastFetched = useSelector(selectPossibleUsersLastFetched)
    console.log('render')
    const state = useSelector(state => state);
    return (
        <>
            <pre>{JSON.stringify(state, null, 3)}</pre>
            <FeaturesContext.Consumer>{
                () => <AppFeatures/>
            }</FeaturesContext.Consumer>
            <div className="app">
                <FeatureRequirement name="users">
                    <section>
                        <FeatureRequirement name="users.login">
                            <LoggedIn>
                                <VerifyLogin/>
                                <LogoutButton/>
                            </LoggedIn>
                            <NotLoggedIn>
                                <LoginForm/>
                            </NotLoggedIn>
                        </FeatureRequirement>

                        <FeatureRequirement name="users.signup">
                            <NotLoggedIn>
                                <SignupForm/>
                            </NotLoggedIn>
                        </FeatureRequirement>
                    </section>
                </FeatureRequirement>
                <FeatureRequirement name="projects">
                    <section>
                        <CreateProjectForm/>
                        <ProjectDisplay/>
                    </section>
                </FeatureRequirement>
                <FeatureRequirement name="concepts">
                    <section>
                        <CreateConceptForm/>
                        <ConceptDisplay/>
                    </section>
                </FeatureRequirement>
                <FeatureRequirement name="users.login">
                    <FeatureRequirement name="files">
                        <section>
                            <UploadFileForm/>
                            <FileDisplay/>
                        </section>
                    </FeatureRequirement>
                </FeatureRequirement>
            </div>
        </>
    );
}

export default App;