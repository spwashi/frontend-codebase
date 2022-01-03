import {FeatureRequirement} from '../util/features';
import React from 'react';
import {TagFeatures} from './TagFeatures';
import {CreateTagForm} from '../features/tags/behaviors/create';
import {TagDisplay} from '../features/tags/components/display';

export function TagsControlPanel() {
    return <>
        <TagFeatures/>
        <FeatureRequirement name="tags">
            <section>
                <CreateTagForm/>
                <FeatureRequirement name="tags.display">
                    <TagDisplay/>
                </FeatureRequirement>
            </section>
        </FeatureRequirement>
    </>;
}