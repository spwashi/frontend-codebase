import {gql, useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleTagsLastFetched, selectTagStateKey} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_TAGS} from '../../../redux/reducer';
import {ACTION_GRAPHQL, ACTION_NOGRAPHQL} from '../../../../../redux/reducer';
import {ITag} from '../../../../../models/tag/models';
import {TagOption} from '../../../../../redux/state.types';

function tagToOption(tag: ITag): TagOption {
    return {title: tag.title, value: tag.title, tag};
}

function fetchIsCurrent(lastFetched: number | null) {
    return (Date.now() - (lastFetched ?? 0)) < 1000;
}
function useDispatchGraphqlError(error: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (/Failed to fetch/i.test(error?.message ?? '')) {
            dispatch({type: ACTION_NOGRAPHQL})
            return;
        }
        if (!error) {
            dispatch({type: ACTION_GRAPHQL})
        }
    }, [error]);
}
export function AllTagsQuery() {
  const ALL_TAGS_QUERY              =
        gql`
            query AllTags {
                allTags {
                    title
                    domain
                    author {
                        name
                        username
                    }
                }
            }
        `;
    const {data: query = {}, error} = useQuery(ALL_TAGS_QUERY);
    const stateKey                  = useSelector(selectTagStateKey);
    const lastFetched               = useSelector(selectPossibleTagsLastFetched)
    const dispatch                  = useDispatch();

    useDispatchGraphqlError(error);

    useEffect(() => {
        const options = query.allTags ? query.allTags.map(tagToOption) : [];
        if (fetchIsCurrent(lastFetched) && !options.length) {
            return;
        }
        dispatch({type: ACTION_RECEIVE_ALL_TAGS, payload: options})
    }, [query.allTags]);

    return !fetchIsCurrent(lastFetched) ? <>Loading...</> : null;
}