import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_projectCreate} from '../../../../forms';
import {getDomain} from '@widgets/form/features/fields/components/FieldFactory';
import {convertToSlug} from '@core/helpers/convertToSlug';

export const form__createProject: IFormConfig = {
  title:  'Create Project',
  formId: formId_projectCreate,
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