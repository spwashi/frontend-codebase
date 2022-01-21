import {FormElementConfig} from '../../../components/form/Factory';
import {SelectOption} from '../../../components/form/input/select/SelectInput';

export const mimeOptions = ['text/plain', 'text/spw', 'text/rich'].map(title => ({
    title,
    value:   title,
    payload: title,
})) as SelectOption[];


export const tagsInput: FormElementConfig = {
    title: 'Tags',
    name:  'tags',
    type:  'tags',
}

export const conceptInput: FormElementConfig  = {
    title: 'Concept',
    name:  'concept',
    type:  'concept',
};
export const userInput: FormElementConfig     = {
    title: 'User',
    name:  'user',
    type:  'user',
};
export const idInput: FormElementConfig       = {
    title: 'ID',
    name:  'id',
    type:  'value',
}
export const titleInput: FormElementConfig    = {
    title: 'Concept Title',
    name:  'title',
    type:  'text',
};
export const mimeTypeInput: FormElementConfig = {
    title:   'Content Type',
    name:    'mimeType',
    type:    'select',
    options: mimeOptions,
};
export const srcInput: FormElementConfig      = {
    title: 'Concept Contents',
    name:  'src',
    type:  'content',
};