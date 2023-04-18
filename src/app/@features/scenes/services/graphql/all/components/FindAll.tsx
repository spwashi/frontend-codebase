import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleScenesLastFetched, selectSceneStateKey} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_SCENES} from '../../../redux/reducer';
import {useFeatureQuery} from '@services/features/hooks/useFeatureQuery';
import {IScene} from '@junction/models/scene/models';
import {gqlQueryNode_SCENE_LIST} from '@features/scenes/services/graphql/queries/list/query';

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