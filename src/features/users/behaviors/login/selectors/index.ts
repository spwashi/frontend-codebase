import {FormConfig} from '../../../../../components/form/Factory';

export function selectLoginInput(data: any) {
    console.log(data)
    const {user: {username} = {username: null}, password} = data ?? {};
    console.log(data);
    return {
        user:     {username},
        password: {password},
    };
}
export const form__login: FormConfig =
                 {
                     title: 'Login',
                     items: [
                         {type: 'user', name: 'user', title: 'User'},
                         {type: 'password', name: 'password', title: 'Password'},
                     ],
                 };