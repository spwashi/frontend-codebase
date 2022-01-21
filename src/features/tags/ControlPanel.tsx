import {FeatureRequirement} from '../_util';
import React from 'react';
import {TagFeatures} from './Features';
import {RestrictedCreateTagForm} from './behaviors/create';
import {TagDisplay} from './components/display';
import {UserFeatures} from '../users/Features';
import {ProjectFeatures} from '../projects/Features';

export function TagsControlPanel() {
    return (
        <>
            <TagFeatures/>
            <UserFeatures/>
            <ProjectFeatures/>

            <FeatureRequirement name="tags">
                <section>
                    <RestrictedCreateTagForm/>
                    <FeatureRequirement name="tags.display">
                        <TagDisplay/>
                    </FeatureRequirement>
                </section>
            </FeatureRequirement>
        </>
    );
}