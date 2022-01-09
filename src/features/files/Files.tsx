import {FeatureRequirement} from '../_util';
import {UploadFileForm} from './behaviors/upload/components/form/Form';
import {FileDisplay} from './components/display/FileDisplay';
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