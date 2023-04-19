import React from "react";
import { getInitialState } from "./helpers/getInitialState";
import { IAppFormContextState } from "./types/state";

export const ID_EMPTY = "[empty]";

export const FormContext: React.Context<IAppFormContextState> =
  React.createContext(getInitialState({}, ID_EMPTY));
