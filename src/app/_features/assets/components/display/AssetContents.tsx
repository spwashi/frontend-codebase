import React, {useEffect, useState} from 'react';

export function AssetContents({realname, name, contentType}: { name: string, realname: string; contentType: string }) {
  const [out, setOut] = useState(null as any | null)
  const BACKEND_URL   = process.env.REACT_APP_BACKEND_URL ?? '';
  const fileUrl       = BACKEND_URL + '/read?file=' + realname;
  const extension     = name.split('.').slice(-1)[0];

  useEffect(() => {
    fetch(fileUrl).then(async (r) => {
      const contentType = r.headers.get('Content-Type') ?? '';
      switch (contentType.split('/')[0]) {
        case 'image':
          return r.blob().then(URL.createObjectURL)
        default:
          if (extension === 'spw') {
            return r.text();
          }
          return 'not sure how to parse this document'
      }
    }).then(setOut)
  }, [fileUrl, extension]);

  switch (contentType.split('/')[0]) {
    case 'image':
      return <><img src={out} width={500} alt=""/></>
    default:
      return <>
        <pre>{out}</pre>
      </>
  }
}