import React, {useState} from 'react';
import {FormContextProvider} from '../../../components/form/FormContext';
import {FileQuery} from '../query/FileQuery';
import {UserSelector} from '../../users/components/UserSelector';
import {FileSelector} from '../list/FileSelector';

/**
 * Selects a file to display, then displays it
 * @param user
 * @constructor
 */
function DisplayForm(user: { username: string | undefined } | { username: string }) {
    const [state, setState] = useState<any | null>();
    return (
        <FormContextProvider onSubmit={setState}>
            {
                user?.username
                ? (
                    <>
                        <FileSelector formKey="realname" username={user?.username}/>
                        <button type="submit">Submit</button>
                        <FileQuery realname={state?.realname ?? ''} username="spwashi"/>
                    </>
                ) : null
            }
        </FormContextProvider>
    );
}

/**
 * Displays a file
 * @constructor
 */
export function FileDisplay() {
    const [user, setUsername] = useState<{ username: string } | null>(null);
    return (
        <section>
            <header>File Display {user?.username}</header>
            <div className="column">
                <FormContextProvider onSubmit={setUsername}>
                    <UserSelector formKey="username" ignoreLogin/>
                    <button>Submit</button>
                </FormContextProvider>
                <DisplayForm username={user?.username}/>
            </div>
        </section>
    )
}