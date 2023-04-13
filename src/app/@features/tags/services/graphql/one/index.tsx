import React from 'react';
import {ITagIdentifyingPartial} from '../../../../../../.junction/models/tag/models';
import {TagContextProvider} from './context/Provider';
import {TagDisplay} from './components/Display';
import {OneTagQuery} from './components/Query';
import {useActiveTag} from './context/hooks/useActiveOne';
import {gql, useMutation} from '@apollo/client';
import {selectLoggedInUser} from '@features/users/behaviors/login/redux/reducer';
import {useSelector} from 'react-redux';
import {Log} from '../../../../../components/dev/Log';

function DeleteTag() {
  const tag  = useActiveTag();
  const user = useSelector(selectLoggedInUser)

  const [send, response] =
          useMutation(
            gql`
                mutation DeleteTag($user:UserReferenceInput!, $tag: TagReferenceInput!) {
                    deleteTag(tag: $tag, user: $user) {
                        title
                        domain
                    }
                }
            `,
          );

  if (!tag || !user) return null;
  return (
    <React.Fragment>
      <Log>{response.data}</Log>
      <button onClick={e => send({
                                   variables: {
                                     title:  tag?.title,
                                     domain: tag?.domain,
                                     user:   {username: user.username},
                                   },
                                 })}>DELETE
      </button>
    </React.Fragment>
  )
}

/**
 *
 * @param title
 * @constructor
 */
export function Tag({id}: ITagIdentifyingPartial) {
  if (!id) return null;
  return (
    <TagContextProvider>
      <DeleteTag/>
      <OneTagQuery id={id}/>
      <TagDisplay/>
    </TagContextProvider>
  )
}