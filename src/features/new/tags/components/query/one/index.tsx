import React from 'react';
import {ITagIdentifyingPartial} from '../../../../../../models/tag/models/ITag';
import {TagContextProvider} from './context/Provider';
import {TagDisplay} from './components/Display';
import {OneTagQuery} from './components/Query';

/**
 *
 * @param title
 * @constructor
 */
export function Tag({title}: ITagIdentifyingPartial) {
    if (!title) return null;
    return (
        <TagContextProvider>
            <OneTagQuery title={title}/>
            <TagDisplay/>
        </TagContextProvider>
    )
}