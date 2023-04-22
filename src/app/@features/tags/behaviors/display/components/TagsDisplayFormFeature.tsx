import React, { useState } from "react";
import { Feature } from "@widgets/feature";
import { FormWidget } from "@widgets/form/FormWidget";
import { FeatureRequirement } from "@widgets/feature";
import {
  featureId__tagDisplay,
  featureId__tagsDisplayForm,
} from "@/features/ids";
import { IFormContextState } from "@widgets/form/context/types/state";
import { ITagContext } from "@features/tags/context/context";
import { Tag } from "../../../services/graphql/one";
import { form__selectTags } from "../../select/config";

export function TagsDisplayFormFeature() {
  const [formState, setFormState] = useState<IFormContextState>();
  const tags = formState?.currentValue?.tags;
  return (
    <Feature name={featureId__tagsDisplayForm}>
      <FeatureRequirement name={featureId__tagDisplay}>
        <FormWidget config={form__selectTags} onSubmit={setFormState} />
        {tags &&
          tags.map((params: ITagContext["tag"]) => (
            <Tag id={params?.id} key={params?.id} />
          ))}
      </FeatureRequirement>
    </Feature>
  );
}
