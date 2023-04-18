import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleScenesLastFetched, selectSceneStateKey} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_SCENES} from '../../../redux/reducer';
import {useFeatureQuery} from '@services/features/hooks/useFeatureQuery';
import {gql} from '@apollo/client';
import {IScene} from '@junction/models/scene/models';

export const gqlQueryNode_SCENE_LIST = gql`
    query AllScenes {
        sceneList {
            id
            name
            title
            description
        }
    }
`;

export function SceneListQuery() {
  const stateKey      = useSelector(selectSceneStateKey);
  const {data: query} = useFeatureQuery<{ sceneList: IScene[] }>(gqlQueryNode_SCENE_LIST, {}, stateKey);
  const lastFetched   = useSelector(selectPossibleScenesLastFetched);
  const dispatch      = useDispatch();
  useEffect(() => {
    dispatch({
               type:    ACTION_RECEIVE_ALL_SCENES,
               payload: query?.sceneList ? query.sceneList : [],
             })
  }, [query?.sceneList]);

  return !lastFetched ? <>Loading...</> : null;
}