import {IUser} from '../../../../app/models/user/models';
import {IConcept} from '../../../../app/models/concept/models';
import {ITag} from '../../../../app/models/tag/models';
import {FormConfig} from '../../../../components/form/field/components/Factory';
import {conceptInput, tagsInput, userInput} from '../../data/config';
import {TagConceptMutationInput} from '../../../../app/models/concept/behaviors/tag';

type TagConceptFormData = {
    username: string;
    user: IUser;
    concept: IConcept;
    tags: ITag[]
}

export const form__tagConcept: FormConfig = {
    formId:    'tag-concept-form',
    title: 'Tag Concept',
    items: [
        userInput,
        conceptInput,
        tagsInput,
    ],
};

export const selectTagAdditionInput =
                 (data: TagConceptFormData): TagConceptMutationInput => {
                     const {user, concept: {id}, tags} = data ?? {};
                     return {
                         concept: {id, user: {id: user.id}},
                         tags:    tags.map(({id}) => ({id})),
                     };
                 };