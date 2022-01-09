import React, {useState} from 'react';
import {FormContextProvider} from '../../../../components/form/FormContext';
import {FileQuery} from '../graphql/queries/FileQuery';
import {UserSelector} from '../../../users/components/UserSelector';
import {IUser} from '../../../../models/user/models';
import {StandardForm} from '../../../../components/form/Form';
import {Log} from '../../../../components/Log';

/**
 * Selects a file to display, then displays it
 * @param user
 * @constructor
 */
function DisplayForm(user: { username: string | undefined } | { username: string }) {
    const [state, setState] = useState<any | null>();
    let realname            = state?.data?.file?.realname ?? '';
    if (!user.username) return null;
    return (
        <>
            <StandardForm
                onSubmit={setState}
                onChange={setState}
                form={{
                    items:
                        !user.username
                        ? []
                        :
                        [
                            {type: 'fileSelect', name: 'file', title: 'File', username: user.username},
                        ],
                }}
            />
            <FileQuery realname={realname} username={user?.username}/>
        </>
    );
}

/**
 * Displays a file
 * @constructor
 */
export function FileDisplay({}) {
    const [state, setUsername] = useState<{ data: { user: IUser } } | null>(null);
    const user                 = state?.data?.user;
    return (
        <section>
            <header>File Display {user?.username}</header>
            <div className="column">
                <FormContextProvider onSubmit={setUsername}>
                    <UserSelector formKey="user" ignoreLogin/>
                </FormContextProvider>
                <DisplayForm username={user?.username}/>
            </div>
        </section>
    )
}