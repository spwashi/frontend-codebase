import React, { useState } from "react";
import { Feature, FeatureRequirement } from "@widgets/feature";
import { FormWidget } from "@widgets/form/FormWidget";
import { IFormContextState } from "@widgets/form/context/types/state";
import { ITagContext } from "@features/tags/context/context";
import { Tag } from "../../../services/graphql/one";
import { form__selectTags } from "../../select/config";
import { featureIds } from "@/features/ids";

export function TagsDisplayFormFeature() {
  const [formState, setFormState] = useState<IFormContextState>();
  const tags = formState?.currentValue?.tags;
  return (
    <Feature name={featureIds.tag.display_form}>
      <FeatureRequirement name={featureIds.tag.tags}>
        <FormWidget config={form__selectTags} onSubmit={setFormState} />
        {tags &&
          tags.map((params: ITagContext["tag"]) => (
            <Tag id={params?.id} key={params?.id} />
          ))}
      </FeatureRequirement>
    </Feature>
  );
}
