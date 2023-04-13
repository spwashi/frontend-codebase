import React from 'react';
import {getInitialState} from './helpers/getInitialState';
import {FormState} from './types/state';

export const ID_EMPTY = '[empty]';

export const FormContext: React.Context<FormState> = React.createContext(getInitialState({}, ID_EMPTY));


