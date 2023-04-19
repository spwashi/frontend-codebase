import React from "react";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { ITagIdentifyingPartial } from "@junction/models/tag/models";
import { selectLoggedInUser } from "@features/users/behaviors/login/redux/reducer";
import { Log } from "@core/dev/components/Log";
import { gqlNode_TAG_DELETE } from "@features/tags/services/graphql/one/mutations/delete";
import { TagContextProvider } from "./context/Provider";
import { TagDisplay } from "./components/Display";
import { OneTagQuery } from "./components/Query";
import { useActiveTag } from "./context/hooks/useActiveOne";

function DeleteTag() {
  const tag = useActiveTag();
  const user = useSelector(selectLoggedInUser);
  const [send, response] = useMutation(gqlNode_TAG_DELETE);

  if (!tag || !user) return null;
  return (
    <React.Fragment>
      <Log>{response.data}</Log>
      <button
        onClick={() =>
          send({
            variables: {
              title: tag?.title,
              domain: tag?.domain,
              user: { username: user.username },
            },
          })
        }
      >
        DELETE
      </button>
    </React.Fragment>
  );
}

/**
 *
 * @param title
 * @constructor
 */
export function Tag({ id }: ITagIdentifyingPartial) {
  if (!id) return null;
  return (
    <TagContextProvider>
      <DeleteTag />
      <OneTagQuery id={id} />
      <TagDisplay />
    </TagContextProvider>
  );
}
