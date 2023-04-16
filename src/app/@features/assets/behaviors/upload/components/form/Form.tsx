import React, {useCallback, useState} from 'react';
import {BACKEND_URL} from '@core/constants';
import {FormWidget} from '@widgets/form/FormWidget';
import {Dev} from '@core/dev/components/Dev';
import {useJwt} from '@services/jwt/hooks/useJwt';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {Feature} from '@services/features/item/components/Feature';
import {formId_assetUpload} from '../../../../../../forms';

const uploadAssetFormFeature = 'feature.asset.upload.form';

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

const form__uploadAsset: IFormConfig =
        {
          title:  'Upload Asset',
          formId: formId_assetUpload,
          items:  [
            {type: 'user', name: 'name', title: 'User', ignoreLogin: false},
            {type: 'asset', name: 'assets', title: 'Asset'},
            {type: 'tags', name: 'tags', title: 'Tags'},
          ],
        };

export function UploadAssetForm() {
  const [out, setOut]     = useState<any | null>(null);
  const jwt               = useJwt();
  const [error, setError] = useState<any | null>(null);
  const onSubmit          = useCallback(async ({
                                                 data,
                                               }: any) => {
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
    <Feature name={uploadAssetFormFeature}>
      <Dev>{error}</Dev>
      <FormWidget config={form__uploadAsset} onSubmit={onSubmit}/>
      {
        out
        ? <pre>{JSON.stringify(out, null, 3)}</pre>
        : null
      }
    </Feature>
  );
}