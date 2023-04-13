import React, {useCallback, useState} from 'react';
import {BACKEND_URL} from '../../../../../../constants';
import {FormConfig} from '../../../../../../_widgets/form/_features/fields/components/FieldFactory';
import {FormWidget} from '../../../../../../_widgets/form/FormWidget';
import {LoggedIn} from '../../../../../users/behaviors/login/components/Requirement';
import {Dev} from '../../../../../../components/dev/Dev';
import {useJwt} from '../../../../../../_services/jwt/hooks/useJwt';


interface SubmissionCallbackParams {
  data: any;
  jwt: string;
  assets: FileList | null;
  uploadLocation: string | null;
  tags: any;
}

function submissionCallback({jwt, assets, uploadLocation, tags}: SubmissionCallbackParams) {
  if (!jwt) {
    alert('Please Log In');
    return;
  }
  if (!uploadLocation) {
    alert('Please select an upload location');
    return;
  }
  const body = new FormData();
  if (!assets) return;

  body.append('jwt', jwt);
  body.append('location', uploadLocation);
  tags?.length && body.append('tags', JSON.stringify(tags));

  [...assets]
    .forEach(function (file, key) {
      return body.append(`asset[${key}]`, file);
    });

  const url = `${BACKEND_URL}/upload`;
  return fetch(url, {method: 'POST', body, mode: 'cors'}).then(j => j.json())
}

const form__uploadAsset: FormConfig =
        {
          formId: 'upload-asset-form',
          title:  'Upload Asset',
          items:  [
            {type: 'user', name: 'name', title: 'User', ignoreLogin: false},
            {type: 'asset', name: 'assets', title: 'Asset'},
            {type: 'tags', name: 'tags', title: 'Tags'},
          ],
        };

export function UploadAssetForm({}) {
  const [out, setOut]     = useState<any | null>(null);
  const jwt               = useJwt();
  const [error, setError] = useState<any | null>(null);
  const onSubmit          = useCallback(async ({data}) => {
    if (!jwt) {
      return setError('No JWT')
    }
    setOut(await submissionCallback({
                                      data,
                                      jwt,
                                      assets:         data.assets,
                                      uploadLocation: data.user.username,
                                      tags:           data.tags,
                                    }))
  }, [jwt])

  if (!BACKEND_URL) return null;
  return (
    <LoggedIn>
      <Dev>{error}</Dev>
      <FormWidget config={form__uploadAsset} onSubmit={onSubmit}/>
      {
        out
        ? <pre>{JSON.stringify(out, null, 3)}</pre>
        : null
      }
    </LoggedIn>
  );
}