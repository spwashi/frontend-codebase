import {FormConfig, getDomain} from '../../../../components/form/field/components/Factory';

export function convertToSlug(Text: string) {
  return Text.toLowerCase()
             .replace(/ /g, '-')
             .replace(/[^\w-]+/g, '');
}

export const form__createProject: FormConfig =
               {
                 formId: 'create-project-form',
                 title:  'Create Project',
                 items:  [
                   {
                     type:  'text',
                     name:  'title',
                     title: 'Project Title',
                   },
                   {
                     type:  'value',
                     name:  'name',
                     title: 'Project Name',
                     calc:  (data: any) => convertToSlug(data?.title ?? ''),
                   },
                   {type: 'value', name: 'domain', title: 'Project Domain', calc: () => getDomain()},
                   {type: 'text', name: 'description', title: 'Project Description'},
                 ],
               }

export type SelectMutationInputData =
  {
    title: string;
    name: string;
    description: string;
    domain: string
  }

export function selectCreateProjectInput({title, name, description, domain}: SelectMutationInputData) {
  return {
    project:
      {
        title,
        name,
        description,
        domain,
      },
  };
}