import {gql, useQuery} from '@apollo/client';
import React, {useMemo, useState} from 'react';
import {Tag} from '../../../../../server/src/graphql/typeDefs';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {FormContextProvider} from '../../../components/form/FormContext';
import {TagQuery} from './TagQuery';

function tagToOption(tag: Tag) {
    const {username} = tag.author;
    return {
        title: [username, tag.title].join(' - '),
        value: tag.title,
    };
}
export function TagSelector({formKey}: { formKey?: string }) {
  const ALL_TAGS_QUERY =
        gql`
            query AllTags {
                allTags {
                    title
                    author {
                        name
                        username
                    }
                }
            }
        `;

    const {data: query = {}} = useQuery(ALL_TAGS_QUERY);

    const options =
              useMemo(() => query.allTags
                            ? query.allTags.map(tagToOption)
                            : [],
                      [query]);

    return (
        <SelectInput
            placeholder={'Tag'}
            formKey={formKey ?? ''}
            options={options}
        />
    );
}

function ActiveDisplay() {
    const [state, setState] = useState<any | null>();
    return (
        <section>
            <header>Tag Display</header>
            <FormContextProvider onSubmit={setState}>
                <TagSelector formKey="tag"/>
                <button type="submit">Submit</button>
            </FormContextProvider>
            <TagQuery title={state?.tag ?? ''}/>
        </section>
    )
}
export function TagDisplay() {
    return <ActiveDisplay/>;
}