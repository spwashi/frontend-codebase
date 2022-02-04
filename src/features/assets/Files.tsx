import {FeatureRequirement} from '../_util';
import {UploadFileForm} from './behaviors/upload/components/form/Form';
import {FileDisplay} from './components/display/FileDisplay';
import React from 'react';
import {UserFeatures} from '../users/Features';
import {ProjectFeatures} from '../projects/Features';
import {LoggedIn} from '../users/behaviors/login/Requirement';

export function FilesControlPanel() {
    return <>
        {/*Files*/}

            <UserFeatures/>
            <ProjectFeatures/>

            <FeatureRequirement name="users.login">
                <FeatureRequirement name="files">
                    <section>
                        <LoggedIn>
                            <UploadFileForm/>
                        </LoggedIn>
                        <FileDisplay/>
                    </section>
                </FeatureRequirement>
            </FeatureRequirement>
    </>;
}