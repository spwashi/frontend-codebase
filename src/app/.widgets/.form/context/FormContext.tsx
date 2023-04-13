import React from 'react';
import {getInitialState} from './initialState';
import {FormState} from './types';

export const ID_EMPTY = '[empty]';

export const FormContext: React.Context<FormState> = React.createContext(getInitialState({}, ID_EMPTY));


