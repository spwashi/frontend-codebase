import {FeatureRequirement} from '../_util';
import React from 'react';
import {TagFeatures} from './Features';
import {RestrictedCreateTagForm} from './behaviors/create';
import {TagsDisplayForm} from './components/display';
import {UserFeatures} from '../users/Features';
import {ProjectFeatures} from '../projects/Features';

export function TagsControlPanel() {
    return (
        <>
            <TagFeatures/>
            <UserFeatures/>
            <ProjectFeatures/>

            <FeatureRequirement name="tags" alternative={'Need Tags'}>
                <section>
                    <RestrictedCreateTagForm/>
                    <FeatureRequirement name="tags.display" alternative={'Need Tag Display'}>
                        <TagsDisplayForm/>
                    </FeatureRequirement>
                </section>
            </FeatureRequirement>
        </>
    );
}