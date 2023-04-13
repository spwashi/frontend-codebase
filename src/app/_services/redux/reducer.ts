import {combineReducers} from 'redux';
import {userReducer} from '../../_features/users/services/redux/reducer';
import {projectReducer} from '../../_features/projects/services/redux/reducer';
import {conceptReducer} from '../../_features/concepts/services/redux/reducer';
import {assetReducer} from '../../_features/assets/services/redux/reducer';
import {tagReducer} from '../../_features/tags/services/redux/reducer';
import {sceneReducer} from '../../_features/scenes/services/redux/reducer';
import {eventReducer} from '../../_features/events/services/redux/reducer';

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