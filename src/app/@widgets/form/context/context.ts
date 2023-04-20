import React from "react";
import { getInitialState } from "./helpers/getInitialState";
import { IFormContextState } from "./types/state";

export const ID_EMPTY = "[empty]";

export const FormContext: React.Context<IFormContextState> =
  React.createContext(getInitialState({}, ID_EMPTY));
