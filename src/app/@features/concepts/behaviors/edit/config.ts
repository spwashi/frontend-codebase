import {contentTypeInput, idInput, srcInput, titleInput, userInput} from '../../data/config/inputs';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_conceptEdit} from '../../../../@/formIds';

export const form__editConcept: IFormConfig = {
  title:  'Edit Concept',
  formId: formId_conceptEdit,
  items:  [
    userInput,
    idInput,
    titleInput,
    contentTypeInput,
    srcInput,
  ],
};
