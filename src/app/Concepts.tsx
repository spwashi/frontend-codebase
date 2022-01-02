import {FeatureRequirement} from '../util/features';
import {CreateConceptForm} from '../features/new/concepts/behaviors/create';
import {TagConceptForm} from '../features/new/concepts/behaviors/tag';
import React from 'react';
import {ConceptFeatures} from './ConceptFeatures';
import {ConceptDisplay} from '../features/new/concepts/components/display';

export function ConceptsControlPanel() {
    return <>
        <ConceptFeatures/>
        <FeatureRequirement name="concepts">
            <section>
                <CreateConceptForm/>
                <FeatureRequirement name="concepts.display">
                    <ConceptDisplay/>
                    <FeatureRequirement name="tags.display">
                        <TagConceptForm/>
                    </FeatureRequirement>
                </FeatureRequirement>
            </section>
        </FeatureRequirement>
    </>;
}