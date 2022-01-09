import {FormConfig} from '../../../../components/form/Factory';

export const form__createProject: FormConfig = {
    title: 'Create Project',
    items: [
        {type: 'text', name: 'title', title: 'Project Title'},
        {type: 'text', name: 'name', title: 'Project Name'},
        {type: 'text', name: 'domain', title: 'Domain'},
        {type: 'text', name: 'description', title: 'Project Description'},
    ],
}
export type SelectMutationInputData = {
    title: string;
    name: string;
    description: string;
    domain: string
}

export function selectCreateProjectInput({title, name, description, domain}: SelectMutationInputData) {
    return {
        project: {title, name, description, domain},
    };
}