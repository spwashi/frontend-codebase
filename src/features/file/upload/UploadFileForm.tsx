import React, {useCallback, useState} from 'react';
import {FileInput} from '../../../components/form/input/files/FileInput';
import {UserSelector} from '../../user/components/UserSelector';
import {FormContextProvider} from '../../../components/form/FormContext';
import {BACKEND_URL} from '../../../constants';


const submissionCallback =
          (data: any, files: FileList | null, uploadLocation: string | null) => {
              if (!uploadLocation) {
                  alert('Please select an upload location');
                  return;
              }
              const body = new FormData();
              if (!files) return;

              body.append('location', uploadLocation);

              [...files]
                  .forEach(function (file, key) {
                      return body.append(`file[${key}]`, file);
                  });

              const url = `${BACKEND_URL}/upload`;
              return fetch(url, {method: 'POST', body, mode: 'cors'}).then(j => j.json())
          };

export function UploadFileForm() {
    const submit        = useCallback(submissionCallback, []);
    const [out, setOut] = useState<any | null>(null);
    const onSubmit      = useCallback(async (data) => {
        const uploaded = await submit(data, data.files, data.username);
        console.log(uploaded)
        setOut(uploaded)
    }, [submit])

    if (!BACKEND_URL) return null;
    return (
        <section id="form__file-upload">
            <header>Upload File Form</header>
            <FormContextProvider onSubmit={onSubmit}>
                <FileInput formKey="files" multiple/>
                <UserSelector formKey="username"/>
                <button type="submit">Submit</button>
                {
                    out
                    ? <pre>{JSON.stringify(out, null, 3)}</pre>
                    : null
                }
            </FormContextProvider>
        </section>
    );
}