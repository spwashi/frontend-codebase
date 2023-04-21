import React, { useState } from "react";
import { convertFromRaw, Editor, EditorState } from "draft-js";
import {
  IConcept_Complete,
  IConceptTag_Complete,
} from "@junction/models/concept/hybrids";
import { Log } from "@core/dev/components/Log";
import {
  IConceptContext,
  useActiveConcept,
} from "@features/concepts/context/context";
import { ConceptTagWidget } from "./components/ConceptTagWidget";
import { DeleteConceptButton } from "./DeleteButton";

function RichText({ src }: { src: string }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(convertFromRaw(JSON.parse(src)))
  );
  return (
    <Editor readOnly onChange={setEditorState} editorState={editorState} />
  );
}

interface IConceptDisplayParams {
  concept: IConceptContext["concept"];
}

function ConceptDisplayBody({ concept }: IConceptDisplayParams) {
  if (!concept) return null;
  const { title, contentType, src, ConceptTag: conceptTags } = concept;

  return (
    <div className="concept-wrapper">
      <article className="concept">
        <section>
          <header>
            <span className="title">{title}</span>
          </header>
          <section className="body">
            <div className="contentType">{contentType}</div>

            <div className="content">
              {(() => {
                switch (contentType) {
                  case "text/rich":
                    return <div className="rich-text">{RichText({ src })}</div>;
                  case "text/text":
                    return <span className="plain">{src}</span>;
                  default:
                    return <Log>{src}</Log>;
                }
              })()}
            </div>
            <div
              style={{ border: "thick solid black", display: "inline-flex" }}
            >
              {conceptTags &&
                conceptTags.map(({ tag }: IConceptTag_Complete) => (
                  <ConceptTagWidget key={tag.id} tag={tag} concept={concept} />
                ))}
            </div>
          </section>
        </section>
      </article>
    </div>
  );
}
export function ConceptDisplay({ concept }: IConceptDisplayParams) {
  const { id } = concept as IConcept_Complete;

  return (
    <>
      <DeleteConceptButton id={id} />
      <ConceptDisplayBody concept={concept} />
    </>
  );
}

/**
 * Displays concepts based on the context
 * @constructor
 */
export function ConceptContextDisplay() {
  const concept = useActiveConcept();
  if (!concept) return null;
  return <ConceptDisplay concept={concept} />;
}
