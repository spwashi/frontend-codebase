import React from 'react';

import {SignupForm} from '../features/user/features/signup/forms/SignupForm'
import {LoginForm} from '../features/user/features/login/forms/LoginForm';
import {UploadFileForm} from '../features/file/upload/UploadFileForm';
import {CreateConceptForm} from '../features/user/features/concept/forms/CreateConceptForm';
import {ConceptDisplay} from '../features/user/components/ConceptSelector';
import {CreateProjectForm} from '../features/project/features/create/forms/CreateProjectForm';
import {ProjectDisplay} from '../features/project/components/ProjectSelector';
import {FileDisplay} from '../features/file/display/FileDisplay';
import {VerifyLogin} from '../features/user/features/login/VerifyLogin';
import {LogoutButton} from '../features/user/features/login/Logout';
import {Feature, FeatureRequirement} from '../features/context';
import {LoggedIn, NotLoggedIn} from '../features/user/features/login/State';
import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../features/user/redux/selectors';
import {AllUsersQuery} from '../features/user/components/AllUsersQuery';
import {AllProjectsQuery} from '../features/project/components/AllProjectsQuery';
import {selectPossibleProjectsLastFetched, selectPossibleProjectsList} from '../features/project/redux/selectors';


function UserLoginFeature() {
    const lastFetched = useSelector(selectPossibleUsersLastFetched)
    const list        = useSelector(selectPossibleUsersList)
    return <Feature name="users.login" enabled={lastFetched ? !!list.length : false}/>;
}

function ProjectDisplayFeature() {
    const lastFetched = useSelector(selectPossibleProjectsLastFetched)
    const list        = useSelector(selectPossibleProjectsList)
    return <Feature name="projects.display" enabled={lastFetched ? !!list.length : false}/>;
}


function UsersFeature() {
    return (
        <Feature name="users">
            <UserLoginFeature/>
            <Feature name="users.signup"/>
        </Feature>
    );
}
function ProjectsFeature() {
    return (
        <Feature name="projects">
            <UsersFeature/>
            <ProjectDisplayFeature/>
            <Feature name="files"/>
        </Feature>
    );
}
const AppFeatures = (() => {
    return (
        <>
            <AllUsersQuery/>
            <AllProjectsQuery/>
            {ProjectsFeature()}
            <Feature name="concepts"/>
        </>
    );
});

function App() {
    return (
        <>
            <AppFeatures/>
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
                        <FeatureRequirement name="projects.display">
                            <ProjectDisplay/>
                        </FeatureRequirement>
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