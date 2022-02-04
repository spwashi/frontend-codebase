import React, {useState} from 'react';
import {Tag} from '../query/one';
import {ITag} from '../../../../app/models/tag/models';
import {FeatureRequirement} from '../../../_util';
import {StandardForm} from '../../../../components/form/Form';

export function TagsDisplayForm({}) {
    const [state, setState] = useState<any | null>();
    const tags              = state?.data?.tags;
    return (
        <FeatureRequirement name="tags.display">
            <section>
                <header>Tags Display</header>
                <StandardForm onSubmit={setState} form={{
                    formId: 'display-tags-form',
                    items:  [{name: 'tags', title: 'Tags', type: 'tags'}],
                }}/>
                {tags && tags.map(({id}: ITag) => <Tag id={id} key={id}/>)}
            </section>
        </FeatureRequirement>
    )
}