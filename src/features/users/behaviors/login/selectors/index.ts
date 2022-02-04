import {FormConfig, FormFieldConfig} from '../../../../../components/form/field/components/Factory';
import {makeFieldRequired} from '../../../../../components/form/field/util/makeFieldRequired';

export function selectLoginInput(data: any) {
    const {
              user: {username} = {username: null},
              password,
              project,
          } = data ?? {};

    return {
        user:     {username},
        password: {password},
    };
}

const userInput: FormFieldConfig = {
    type:        'user',
    name:        'user',
    title:       'User',
    ignoreLogin: true,
};

const passwordInput: FormFieldConfig = {
    type:  'password',
    name:  'password',
    title: 'Password',
};

const projectInput: FormFieldConfig = {
    type:  'project',
    name:  'project',
    title: 'Project',
};

export const form__login: FormConfig =
                 {
                     formId:    'login-form',
                     title: 'Login',
                     items: [
                                userInput,
                                passwordInput,
                                projectInput,
                            ].map(makeFieldRequired),
                 };