import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleScenesLastFetched, selectSceneStateKey} from '../../../../redux/selectors';
import {ACTION_RECEIVE_ALL_SCENES} from '../../../../redux/reducer';
import {useFeatureQuery} from '../../../../../_util/hooks/useFeatureQuery';
import {gql} from '@apollo/client';
import {IScene} from '../../../../../../../junction/models/scene/models';

export function AllScenesQuery() {
    const stateKey    = useSelector(selectSceneStateKey);
  const {data: query} =
        useFeatureQuery<{ allScenes: IScene[] }>(
            gql`
                query AllScenes {
                    allScenes {
                        id
                        name
                        title
                        description
                    }
                }
            `,
            {},
            stateKey,
        );
    const lastFetched = useSelector(selectPossibleScenesLastFetched);
    const dispatch    = useDispatch();
    useEffect(() => {
        dispatch({
                     type:    ACTION_RECEIVE_ALL_SCENES,
                     payload: query?.allScenes ? query.allScenes : [],
                 })
    }, [query?.allScenes]);

    return !lastFetched ? <>Loading...</> : null;
}