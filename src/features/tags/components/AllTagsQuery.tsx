import {TagInput} from '../../../../../server/src/graphql/typeDefs';
import {gql, useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleTagsLastFetched} from '../redux/selectors';
import {ACTION_RECEIVE_ALL_TAGS} from '../redux/reducer';

function tagToOption(tag: TagInput) {
    return {title: tag.title, value: tag.title};
}

function fetchIsCurrent(lastFetched: number | null) {
    return (Date.now() - (lastFetched ?? 0)) < 1000;
}
export function AllTagsQuery() {
  const ALL_TAGS_QUERY       =
        gql`
            query AllTags {
                allTags {
                    title
                }
            }
        `;
    const {data: query = {}} = useQuery(ALL_TAGS_QUERY);

    const dispatch    = useDispatch();
    const lastFetched = useSelector(selectPossibleTagsLastFetched)
    useEffect(() => {
        const options = query.allTags ? query.allTags.map(tagToOption) : [];
        if (fetchIsCurrent(lastFetched) && !options.length) {
            return;
        }
        dispatch({type: ACTION_RECEIVE_ALL_TAGS, payload: options})
    }, [query.allTags]);

    return !fetchIsCurrent(lastFetched) ? <>Loading...</> : null;
}