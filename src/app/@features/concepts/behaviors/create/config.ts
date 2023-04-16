import {setFieldValue} from '@widgets/form/features/fields/helpers/setFieldValue';
import {makeFieldRequired} from '@widgets/form/features/fields/helpers/makeFieldRequired';
import {contentTypeInput, srcInput, titleInput, userInput} from '../../data/config/inputs';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_conceptCreate} from '../../../../forms';

export const form__createConcept: IFormConfig = {
  title:  'Create Concept',
  formId: formId_conceptCreate,
  items:  [
            userInput,
            titleInput,
            setFieldValue(contentTypeInput, 'text/plain'),
            srcInput,
          ].map(makeFieldRequired),
};