import React from "react";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { ITagIdentifyingPartial } from "@junction/models/tag/models";
import { selectLoggedInUser } from "@features/users/behaviors/login/redux/reducer";
import { Log } from "@core/dev/components/Log";
import { graphQlNodes } from '@/graphQlNodes';
import { TagContextProvider } from "./context/Provider";
import { TagDisplay } from "./components/Display";
import { TagQuery } from "./components/TagQuery";
import { useActiveTag } from "./context/hooks/useActiveOne";

function DeleteTag() {
  const tag = useActiveTag();
  const user = useSelector(selectLoggedInUser);
  const [send, response] = useMutation(graphQlNodes.tag.delete);

  if (!tag || !user) return null;
  return (
    <React.Fragment>
      <Log>{response.data}</Log>
      <button
        onClick={() =>
          send({
            variables: {
              tag: tag,
              user: user,
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
      <TagQuery id={id} />
      <TagDisplay />
    </TagContextProvider>
  );
}
