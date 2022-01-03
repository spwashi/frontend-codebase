import {FeatureRequirement} from '../util/features';
import {CreateConceptForm} from '../features/concepts/behaviors/create';
import {TagConceptForm} from '../features/concepts/behaviors/tag';
import React from 'react';
import {ConceptFeatures} from './ConceptFeatures';
import {ConceptDisplay} from '../features/concepts/components/display';

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