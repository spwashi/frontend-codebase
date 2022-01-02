import {gql, useQuery} from '@apollo/client';
import React, {useMemo, useState} from 'react';
import {SelectInput} from '../../../../components/form/input/select/SelectInput';
import {FormContextProvider} from '../../../../components/form/FormContext';
import {Project} from '../../../../../types/graphql/typeDefs';
import {IProject} from '../../../../models/project/models/IProject';

type ProjectOption = { title: any; value: IProject };

function projectToOption(project: IProject): ProjectOption {
    const {name, title} = project;
    return {
        title,
        value: project,
    };
}
export function ProjectSelector({formKey}: { formKey?: string }) {
  const ALL_PROJECTS_QUERY =
        gql`
            query AllProjects {
                allProjects {
                    title
                    name
                }
            }
        `;

    const {data: query = {}} = useQuery(ALL_PROJECTS_QUERY);

    const options        =
              useMemo(() => query.allProjects
                            ? query.allProjects.map(projectToOption)
                            : [],
                      [query]);
    const optionValueMap = useMemo(() => new Map(options.map((o: ProjectOption) => [
        o.title, o.value as Project,
    ])), [options]);
    function valueMapper(value: string[]) {
        if (Array.isArray(value)) {
            return value.map((v: string) => {
                if (!optionValueMap.has(v)) return null;
                const {name} = optionValueMap.get(v) as Project;
                return {name};
            })
        } else {
            let out = optionValueMap.get(value) as Project;
            if (typeof value === 'string' && !out) {
                return {name: value}
            }
            const {name} = out;
            return {name};
        }
    }
    return (
        <SelectInput
            valueMapper={valueMapper}
            placeholder="Project"
            formKey={formKey ?? ''}
            options={options}
        />
    );
}

function ProjectQuery({name}: { name: string }) {
  const {data: query = {}} = useQuery(gql`
      query Project($name: String) {
          project(name: $name) {
              name
              title
          }
      }
  `, {variables: {name}});

    if (!query.project) return null;

    const {title} = query?.project ?? {};

    return (
        <pre>{name} - {title}</pre>
    )
}

export function ProjectDisplay() {
    const [state, setState] = useState<any | null>();
    return (
        <section>
            <header>Project Display</header>
            <FormContextProvider onSubmit={setState}>
                <ProjectSelector formKey="name"/>
                <button type="submit">Submit</button>
                <ProjectQuery name={state?.name ?? ''}/>
            </FormContextProvider>
        </section>
    )
}