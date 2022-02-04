import {FormFieldConfig} from '../../../components/form/field/components/Factory';
import {SelectOption} from '../../../components/form/input/select/SelectInput';
import {spwParser} from '@spwashi/spw';

export const mimeOptions = ['text/plain', 'text/spw', 'text/rich'].map(title => ({
    title,
    value:   title,
    payload: title,
})) as SelectOption[];


export const tagsInput: FormFieldConfig = {
    title: 'Tags',
    name:  'tags',
    type:  'tags',
}

export const conceptInput: FormFieldConfig  = {
    title: 'Concept',
    name:  'concept',
    type:  'concept',
};
export const userInput: FormFieldConfig     = {
    title: 'User',
    name:  'user',
    type:  'user',
};
export const idInput: FormFieldConfig       = {
    title: 'ID',
    name:  'id',
    type:  'value',
}
export const titleInput: FormFieldConfig    = {
    title:      'Concept Title',
    name:       'title',
    type:       'text',
    validators: {
        onChange: [
            v => {
                return v?.data.title === 'boon' ? 'cannot be boon' : true;
            },
        ],
    },
};
export const mimeTypeInput: FormFieldConfig = {
    title:   'Content Type',
    name:    'mimeType',
    type:    'select',
    options: mimeOptions,
};
export const srcInput: FormFieldConfig      = {
    title:      'Concept Contents',
    name:       'src',
    type:       'content',
    validators: {
        onSubmit: [
            ({data}) => {
                if (data.src) {
                    const out = spwParser.parse(data.src, {})
                    alert(JSON.stringify(out))
                    return true;
                }
                return false;
            },

        ],
    },
};