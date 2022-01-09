import {FeatureRequirement} from '../_util';
import React from 'react';
import {TagFeatures} from './TagFeatures';
import {CreateTagForm} from './behaviors/create';
import {TagDisplay} from './components/display';

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