import React from 'react';

import {SignupForm} from '../features/users/features/signup/forms/SignupForm'
import {LoginForm} from '../features/users/features/login/forms/LoginForm';
import {UploadFileForm} from '../features/file/features/upload/UploadFileForm';
import {CreateConceptForm} from '../features/concepts/features/create/forms/CreateConceptForm';
import {ConceptDisplay} from '../features/concepts/components/ConceptSelector';
import {CreateProjectForm} from '../features/projects/features/create/forms/CreateProjectForm';
import {ProjectDisplay} from '../features/projects/components/ProjectSelector';
import {FileDisplay} from '../features/file/features/display/FileDisplay';
import {VerifyLogin} from '../features/users/features/login/VerifyLogin';
import {LogoutButton} from '../features/users/features/login/Logout';
import {Feature, FeatureRequirement} from '../util/features';
import {LoggedIn, NotLoggedIn} from '../features/users/features/login/State';
import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../features/users/redux/selectors';
import {AllUsersQuery} from '../features/users/components/AllUsersQuery';
import {AllProjectsQuery} from '../features/projects/components/AllProjectsQuery';
import {selectPossibleProjectsLastFetched, selectPossibleProjectsList} from '../features/projects/redux/selectors';
import {AllConceptsQuery} from '../features/concepts/components/AllConceptsQuery';
import {selectPossibleConceptsLastFetched, selectPossibleConceptsList} from '../features/concepts/redux/selectors';
import {CreateTagForm} from '../features/tags/features/create/forms/CreateTagForm';
import {TagDisplay} from '../features/tags/components/TagSelector';
import {selectPossibleTagsLastFetched, selectPossibleTagsList} from '../features/tags/redux/selectors';
import {AllTagsQuery} from '../features/tags/components/AllTagsQuery';


function UserLoginFeature() {
    const lastFetched = useSelector(selectPossibleUsersLastFetched)
    const list        = useSelector(selectPossibleUsersList)
    return <Feature name="users.login" enabled={lastFetched ? !!list.length : false}/>;
}
function UserFeatures() {
    return (
        <Feature name="users">
            <UserLoginFeature/>
            <Feature name="users.signup"/>
        </Feature>
    );
}

function ProjectDisplayFeature() {
    const lastFetched = useSelector(selectPossibleProjectsLastFetched)
    const list        = useSelector(selectPossibleProjectsList)
    return <Feature name="projects.display" enabled={lastFetched ? !!list.length : false}/>;
}
function ProjectFeatures() {
    return (
        <Feature name="projects">
            <UserFeatures/>
            <ProjectDisplayFeature/>
            <Feature name="files"/>
        </Feature>
    );
}

function ConceptDisplayFeature() {
    const lastFetched = useSelector(selectPossibleConceptsLastFetched)
    const list        = useSelector(selectPossibleConceptsList)
    return <Feature name="concepts.display" enabled={lastFetched ? !!list.length : false}/>;
}
function ConceptFeatures() {
    return (
        <Feature name="concepts">
            <ConceptDisplayFeature/>
        </Feature>
    )
}

function TagDisplayFeature() {
    const lastFetched = useSelector(selectPossibleTagsLastFetched)
    const list        = useSelector(selectPossibleTagsList)
    return <Feature name="tags.display" enabled={lastFetched ? !!list.length : false}/>;
}
function TagFeatures() {
    return (
        <Feature name="tags">
            <TagDisplayFeature/>
        </Feature>
    )
}


const AppFeatures = (() => {
    return (
        <>


            <ProjectFeatures/>
            <ConceptFeatures/>
            <TagFeatures/>
        </>
    );
});

function SeedQueries() {
    return <><AllUsersQuery/>
        <AllProjectsQuery/>
        <AllConceptsQuery/>
        <AllTagsQuery/></>;
}
function App() {
    return (
        <>
            <SeedQueries/>
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
                        <FeatureRequirement name="concepts.display">
                            <ConceptDisplay/>
                        </FeatureRequirement>
                    </section>
                </FeatureRequirement>
                <FeatureRequirement name="tags">
                    <section>
                        <CreateTagForm/>
                        <FeatureRequirement name="tags.display">
                            <TagDisplay/>
                        </FeatureRequirement>
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