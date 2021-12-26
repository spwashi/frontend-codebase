import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {Input} from '../../../../../components/form/input/text/Input';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {FormContextProvider} from '../../../../../components/form/FormContext';

// Define mutation
const CREATE_PROJECT = gql`
    mutation CreateProject($name: String!, $title:String!) {
        createProject(project: {name: $name, title: $title}) {
            name
            title
        }
    }
`;

function selectMutationInput(data: any) {
    const {name, title} = data ?? {};
    return {
        title,
        name,
    };
}
export function CreateProjectForm() {
    const [send, response] = useMutation(CREATE_PROJECT);
    const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
    return (
        <section id="form__project-create">
            <header>Create Project Form</header>
            <FormContextProvider onSubmit={onsubmit}>
                <Input formKey="name" placeholder="Project name"/>
                <Input formKey="title" placeholder="Project title"/>
                <button type="submit">submit</button>
                <GraphqlMutationResponse response={response}/>
            </FormContextProvider>
        </section>
    )
}
