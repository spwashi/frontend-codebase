import {FormConfig, FormFieldConfig} from '../../../../components/form/field/components/Factory';
import {CreateTagMutationInput} from '../../../../app/models/tag/behaviors/create';
import {IUser} from '../../../../app/models/user/models';
import {makeFieldRequired} from '../../../../components/form/field/util/makeFieldRequired';

export type SelectMutationInputData = {
    title: string;
    description: string;
    domain: string;
    user: IUser
}

const userInput: FormFieldConfig         = {title: 'User', name: 'user', type: 'user'};
const titleInput: FormFieldConfig        = {title: 'Title', name: 'title', type: 'text'};
const domainInput: FormFieldConfig       = {title: 'Domain', name: 'domain', type: 'text'};
const descriptionInput: FormFieldConfig  = {title: 'Description', name: 'description', type: 'longtext'};
export const form__createTag: FormConfig = {
    formId:    'create-tag-form',
    title: 'Create Tag',
    items: [userInput, titleInput, domainInput, descriptionInput].map(makeFieldRequired),
};

export const selectCreateTagInput =
                 (data: SelectMutationInputData): CreateTagMutationInput => {
                     const {title, domain, user, description} = data ?? {};

                     return {
                         tag:  {
                             title,
                             domain,
                             description,
                         },
                         user: {id: user.id},
                     };
                 };