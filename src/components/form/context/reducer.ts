import {getInitialState} from './initialState';

export const ACTION_UPDATE_INDEX = 'update';
export const ACTION_SET_DEFAULT  = 'setDefault';
export function formReducer(state = getInitialState(), action: { type: string, payload: any }) {
    switch (action.type) {
        case ACTION_SET_DEFAULT:
            let initialValue = action.payload;
            return {
                ...state,
                initialValue,
                data: {
                    ...state.data,
                    ...Object.fromEntries(
                        Object
                            .entries(initialValue ?? {})
                            .filter(([key]) => !state.changed[key]),
                    ),
                },
            };
        case ACTION_UPDATE_INDEX:
            const {index, value} = action.payload;
            if (value === state.data?.[index]) return state;
            let changed: { [p: string]: boolean };
            let data: any;

            if (value === state.initialValue?.[index]) {
                changed = {...state.changed, [index]: false};
            } else {
                changed = {...state.changed, [index]: true};
                data    = {...state.data, [index]: value};
            }


            return {
                ...state,
                changed: changed,
                data:    data,
            };
    }
    return state;
}