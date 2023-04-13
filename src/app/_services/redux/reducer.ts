import {combineReducers} from 'redux';
import {userReducer} from '../../_features/users/_services/redux/reducer';
import {projectReducer} from '../../_features/projects/_services/redux/reducer';
import {conceptReducer} from '../../_features/concepts/_services/redux/reducer';
import {assetReducer} from '../../_features/assets/_services/redux/reducer';
import {tagReducer} from '../../_features/tags/_services/redux/reducer';
import {sceneReducer} from '../../_features/scenes/_services/redux/reducer';
import {eventReducer} from '../../_features/events/_services/redux/reducer';

export const ACTION_NOGRAPHQL = 'NO_GRAPHQL';
export const ACTION_GRAPHQL   = 'GRAPHQL';
export const rootReducer      = combineReducers(
  {
    app:
      (state: any = {noGraphql: false}, action: { type: string, payload: any }) => {
        switch (action.type) {
          case ACTION_GRAPHQL:
            return {...state, noGraphql: false}
          case ACTION_NOGRAPHQL:
            return {...state, noGraphql: true}
        }
        return state;
      },

    features:
      combineReducers(
        {
          user:    userReducer,
          project: projectReducer,
          concept: conceptReducer,
          tag:     tagReducer,
          scene:   sceneReducer,
          asset:   assetReducer,
          event:   eventReducer,
        },
      ),
  },
);

export const select_noGraphql = (state: any) => state.app.noGraphql;