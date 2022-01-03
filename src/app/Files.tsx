import {FeatureRequirement} from '../util/features';
import {UploadFileForm} from '../features/files/behaviors/upload/components/form/Form';
import {FileDisplay} from '../features/files/components/display/FileDisplay';
import React from 'react';

export function FilesControlPanel() {
    return <>
        {/*Files*/}
        <FeatureRequirement name="users.login">
            <FeatureRequirement name="files">
                <section>
                    <UploadFileForm/>
                    <FileDisplay/>
                </section>
            </FeatureRequirement>
        </FeatureRequirement>
    </>;
}