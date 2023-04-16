import {descriptionInput, endInput, idInput, startInput, titleInput, userInput} from '../../data/config/inputs';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId__eventEdit} from '../../../../@/formIds';


export const form__editEvent: IFormConfig = {
  title:  'Edit Event',
  formId: formId__eventEdit,
  items:  [
    userInput,
    idInput,
    titleInput,
    startInput,
    endInput,
    descriptionInput,
  ],
};
