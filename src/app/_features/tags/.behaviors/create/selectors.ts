import {FormConfig, FormFieldConfig} from '../../../../_widgets/form/_features/fields/components/FieldFactory';
import {CreateTagMutationInput} from '../../../../../.junction/models/tag/behaviors/create';
import {IUser} from '../../../../../.junction/models/user/models';
import {makeFieldRequired} from '../../../../_widgets/form/_features/fields/helpers/makeFieldRequired';

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
  formId: 'create-tag-form',
  title:  'Create Tag',
  items:  [userInput, titleInput, domainInput, descriptionInput].map(makeFieldRequired),
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