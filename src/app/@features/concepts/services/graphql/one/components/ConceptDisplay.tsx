import React, { useState } from "react";
import { convertFromRaw, Editor, EditorState } from "draft-js";
import { Log } from "@core/dev/components/Log";
import { IConceptContext } from "@features/concepts/context/context";
import { useActiveConcept } from "@features/concepts/context/hooks/useActiveConcept";
import { ConceptDeleteButton } from "./ConceptDeleteButton";

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
  const { title, contentType, src } = concept;

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
                    return (
                      <div className="rich-text">
                        {RichText({ src: src || "" })}
                      </div>
                    );
                  case "text/text":
                    return <span className="plain">{src}</span>;
                  default:
                    return <Log>{src}</Log>;
                }
              })()}
            </div>
          </section>
        </section>
      </article>
    </div>
  );
}

export function ConceptDisplay({ concept }: IConceptDisplayParams) {
  if (!concept) return null;
  const { id } = concept;
  return (
    <>
      {id && <ConceptDeleteButton id={id} />}
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
