import {FormConfig} from '../../../../../components/form/Factory';

export function selectLoginInput(data: any) {
    const {
              user: {username} = {username: null},
              password,
              project
          } = data ?? {};

    return {
        user:     {username},
        password: {password},
    };
}
export const form__login: FormConfig =
                 {
                     title: 'Login',
                     items: [
                         {type: 'user', name: 'user', title: 'User', ignoreLogin: true},
                         {type: 'password', name: 'password', title: 'Password'},
                         {type: 'project', name: 'project', title: 'Project'}
                     ],
                 };