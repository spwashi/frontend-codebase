import React from "react";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "@features/users/behaviors/login/redux/reducer";
import { Log } from "@core/dev/components/Log";
import { graphQlNodes } from "@/graphQlNodes";
import { TagGate } from "@features/tags/context/Provider";
import { useActiveTag } from "@features/tags/context/hooks/useActiveTag";
import {
  DeleteTagInput,
  TagReferenceInput,
} from '@generated/graphql';
import { TagDisplay } from "./components/TagDisplay";
import { TagQuery } from "./components/TagQuery";

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
              tag: tag as DeleteTagInput,
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

export function Tag({ id }: TagReferenceInput) {
  if (!id) return null;
  return (
    <TagGate>
      <DeleteTag />
      <TagQuery id={id} />
      <TagDisplay />
    </TagGate>
  );
}
