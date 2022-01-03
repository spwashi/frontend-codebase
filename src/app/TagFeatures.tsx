import {useSelector} from 'react-redux';
import {Feature} from '../util/features';
import React from 'react';
import {selectPossibleTagsLastFetched, selectPossibleTagsList} from '../features/tags/redux/selectors';

function TagDisplayFeature() {
    const lastFetched = useSelector(selectPossibleTagsLastFetched)
    const list        = useSelector(selectPossibleTagsList)
    return <Feature name="tags.display" enabled={lastFetched ? !!list.length : false}/>;
}
export function TagFeatures() {
    return (
        <Feature name="tags">
            <TagDisplayFeature/>
        </Feature>
    )
}