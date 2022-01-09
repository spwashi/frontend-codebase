import {FeatureRequirement} from '../_util';
import {CreateConceptForm} from './behaviors/create';
import {TagConceptForm} from './behaviors/tag';
import React from 'react';
import {ConceptFeatures} from './ConceptFeatures';
import {ConceptDisplay} from './components/display';

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