import {FormConfig} from '../../../../../components/form/Factory';

export const form__createProject: FormConfig[] = [
    {type: 'text', name: 'title', title: 'Project Title'},
    {type: 'text', name: 'name', title: 'Project Name'},
    {type: 'text', name: 'description', title: 'Project Description'},
]

export type SelectMutationInputData = {
    title: string;
    name: string;
    description: string;
}

export function selectCreateProjectInput({title, name, description}: SelectMutationInputData) {
    return {
        project: {title, name, description},
    };
}