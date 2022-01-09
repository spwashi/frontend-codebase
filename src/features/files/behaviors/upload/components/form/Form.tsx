import React, {useCallback, useState} from 'react';
import {BACKEND_URL} from '../../../../../../constants';
import {FormConfig} from '../../../../../../components/form/Factory';
import {StandardForm} from '../../../../../../components/form/Form';
import {useJwt} from '../../../../../../util/jwt';


interface SubmissionCallbackParams {
    data: any;
    jwt: string;
    files: FileList | null;
    uploadLocation: string | null;
    tags: any;
}

function submissionCallback({jwt, files, uploadLocation, tags}: SubmissionCallbackParams) {
    if (!uploadLocation) {
        alert('Please select an upload location');
        return;
    }
    const body = new FormData();
    if (!files) return;

    body.append('jwt', jwt);
    body.append('location', uploadLocation);
    tags?.length && body.append('tags', JSON.stringify(tags));

    [...files]
        .forEach(function (file, key) {
            return body.append(`file[${key}]`, file);
        });

    const url = `${BACKEND_URL}/upload`;
    return fetch(url, {method: 'POST', body, mode: 'cors'}).then(j => j.json())
}

const form__uploadFile: FormConfig =
          {
              title: 'Upload File',
              items: [
                  {type: 'user', name: 'name', title: 'User'},
                  {type: 'file', name: 'files', title: 'File'},
                  {type: 'tags', name: 'tags', title: 'Tags'},
              ],
          };

export function UploadFileForm({}) {
    const [out, setOut] = useState<any | null>(null);
    const jwt           = useJwt();
    const onSubmit      = useCallback(async ({data}) => {
        if (!jwt) {
            alert('No JWT');
            return;
        }
        setOut(await submissionCallback({
                                            data,
                                            jwt,
                                            files:          data.files,
                                            uploadLocation: data.user.username,
                                            tags:           data.tags,
                                        }))
    }, [jwt])

    if (!BACKEND_URL) return null;
    return (
        <React.Fragment>
            <StandardForm form={form__uploadFile} onSubmit={onSubmit}/>
            {
                out
                ? <pre>{JSON.stringify(out, null, 3)}</pre>
                : null
            }
        </React.Fragment>
    );
}