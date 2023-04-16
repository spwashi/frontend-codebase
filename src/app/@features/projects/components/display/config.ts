import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_selectProjectForm} from '../../../../forms';

export const form__selectProject: IFormConfig = {
  title:  'Select Project Form',
  formId: formId_selectProjectForm,
  items:  [{name: 'project', title: 'Project', type: 'project'}],
};
