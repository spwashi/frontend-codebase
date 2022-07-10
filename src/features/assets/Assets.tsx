import {FeatureRequirement} from '../_util';
import {UploadAssetForm} from './behaviors/upload/components/form/Form';
import {AssetDisplay} from './components/display/AssetDisplay';
import React from 'react';
import {UserFeatures} from '../users/Features';
import {ProjectFeatures} from '../projects/Features';
import {LoggedIn} from '../users/behaviors/login/Requirement';

export function AssetsControlPanel() {
    return <>
        {/*Assets*/}

        <UserFeatures/>
        <ProjectFeatures/>

        <FeatureRequirement name="users.login" alternative={'Need Users Login'}>
            <FeatureRequirement name="assets" alternative={'Need Assets'}>
                <section>
                    <LoggedIn>
                        <UploadAssetForm/>
                    </LoggedIn>
                    <AssetDisplay/>
                </section>
            </FeatureRequirement>
        </FeatureRequirement>
    </>;
}