import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_projectSelect} from '../../../../forms';

export const form__selectProject: IFormConfig = {
  title:  'Select Project',
  formId: formId_projectSelect,
  items:  [{name: 'project', title: 'Project', type: 'project'}],
};
