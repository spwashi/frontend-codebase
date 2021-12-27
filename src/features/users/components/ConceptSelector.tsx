import {gql, useQuery} from '@apollo/client';
import React, {useMemo, useState} from 'react';
import {Concept} from '../../../../../server/src/graphql/typeDefs';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {FormContextProvider} from '../../../components/form/FormContext';
import {ConceptQuery} from './ConceptQuery';

function conceptToOption(concept: Concept) {
    const {username} = concept.author;
    return {
        title: [username, concept.title].join(' - '),
        value: concept.title,
    };
}
export function ConceptSelector({formKey}: { formKey?: string }) {
  const ALL_CONCEPTS_QUERY =
        gql`
            query AllConcepts {
                allConcepts {
                    title
                    author {
                        name
                        username
                    }
                }
            }
        `;

    const {data: query = {}} = useQuery(ALL_CONCEPTS_QUERY);

    const options =
              useMemo(() => query.allConcepts
                            ? query.allConcepts.map(conceptToOption)
                            : [],
                      [query]);

    return (
        <SelectInput
            placeholder={'Concept'}
            formKey={formKey ?? ''}
            options={options}
        />
    );
}

function ActiveDisplay() {
    const [state, setState] = useState<any | null>();
    return (
        <section>
            <header>Concept Display</header>
            <FormContextProvider onSubmit={setState}>
                <ConceptSelector formKey="concept"/>
                <button type="submit">Submit</button>
            </FormContextProvider>
            <ConceptQuery title={state?.concept ?? ''}/>
        </section>
    )
}
export function ConceptDisplay() {
    return <ActiveDisplay/>;
}