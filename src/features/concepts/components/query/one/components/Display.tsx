import {useActiveConcept} from '../context/hooks/useActiveOne';
import {IConcept_Complete, IConceptTag_Complete} from '../../../../../../models';
import {ConceptTag} from '../../../join/tag';
import React from 'react';

export function ConceptDisplay() {
    const concept = useActiveConcept();
    if (!concept) return null;

    const {title, mimeType, ConceptTag: conceptTags} = concept as IConcept_Complete;
    return (
        <>
            <details open>
                <summary>{title}</summary>
                <section>
                    <div>{title}</div>
                    <div>{mimeType}</div>
                    <div style={{border: 'thick solid black', display: 'inline-flex'}}>
                        {conceptTags && conceptTags.map(({tag}: IConceptTag_Complete) => <ConceptTag
                            tag={tag}
                            concept={concept}
                        />)}
                    </div>
                </section>
            </details>
        </>
    )
}