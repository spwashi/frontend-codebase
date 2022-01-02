import {FeatureRequirement} from '../util/features';
import {UploadFileForm} from '../features/old/file/features/upload/UploadFileForm';
import {FileDisplay} from '../features/old/file/features/display/FileDisplay';
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