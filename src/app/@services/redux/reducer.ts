import { combineReducers } from "redux";
import { userReducer } from "@features/users/services/redux/reducer";
import { projectReducer } from "@features/projects/services/redux/reducer";
import { conceptReducer } from "@features/concepts/services/redux/reducer";
import { assetReducer } from "@features/assets/services/redux/reducer";
import { tagReducer } from "@features/tags/services/redux/reducer";
import { sceneReducer } from "@features/scenes/services/redux/reducer";
import { eventReducer } from "@features/events/services/redux/reducer";

export const ACTION_NOGRAPHQL = "NO_GRAPHQL";
export const ACTION_GRAPHQL = "GRAPHQL";
export const rootReducer = combineReducers({
  app: (
    state: any = { noGraphql: false },
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case ACTION_GRAPHQL:
        return { ...state, noGraphql: false };
      case ACTION_NOGRAPHQL:
        return { ...state, noGraphql: true };
    }
    return state;
  },

  features: combineReducers({
    user: userReducer,
    project: projectReducer,
    concept: conceptReducer,
    tag: tagReducer,
    scene: sceneReducer,
    asset: assetReducer,
    event: eventReducer,
  }),
});

export const select_noGraphql = (state: any) => state.app.noGraphql;
