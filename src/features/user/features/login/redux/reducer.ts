export const ACTION_RECEIVE_LOGIN     = 'RECEIVE_LOGIN';
export const ACTION_RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const ACTION_LOGOUT            = 'LOGOUT';

type LoginState = {
    users: { title: string, value: string }[];
    username?: string | undefined
}
type SignupState = {}
type UserState = {
    login: LoginState
    signup: SignupState
}
type RootState = {
    user: UserState
};
export const selectUserLoginState    = (state: RootState) => state.user.login;
export const selectLoggedInUserName  = (state: RootState) => selectUserLoginState(state).username;
export const selectPossibleUsersList = (state: RootState) => selectUserLoginState(state).users ?? [];
export const loginReducer            =
                 (state: LoginState = {users: []}, action: any) => {
                     switch (action.type) {
                         case ACTION_RECEIVE_LOGIN:
                             return {
                                 ...state,
                                 username: action.payload,
                             }
                         case ACTION_LOGOUT:
                             return {
                                 ...state,
                                 username: undefined,
                             }
                         case ACTION_RECEIVE_ALL_USERS:
                             return {
                                 ...state,
                                 users: action.payload,
                             }
                     }
                     return state;
                 }