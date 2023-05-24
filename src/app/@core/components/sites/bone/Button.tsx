import React, { useState } from "react";
import classNames from "classnames";
import { getButtonImageSrc } from "@core/components/sites/bone/util/getButtonImageSrc";

type LoadedState = "loaded" | "unloaded";

interface ButtonParams {
  onClick: () => void;
  isActivated: number;
}

export function Button({ onClick, isActivated }: ButtonParams) {
  const [loadedState, setLoadedState] = useState<LoadedState>("unloaded");

  const onImageLoad = (e: any) => {
    setLoadedState("loaded");
  };

  return (
    <div className={classNames([isActivated ? "activated" : "deactivated"])}>
      <div className="stage-open" aria-hidden="true" />
      <div className="stage-main" />
      <button
        onClick={() => {
          setLoadedState("unloaded");
          onClick();
        }}
        className={classNames(["bone-button"])}
      >
        <figure className={classNames(["fade-image", loadedState])}>
          <img
            role="button"
            onLoad={onImageLoad}
            src={getButtonImageSrc()}
            alt="[The BoneButton]"
          />
          <figcaption>[The BoneButton]</figcaption>
        </figure>
      </button>
      <div className="stage-close" aria-hidden="true" />
    </div>
  );
}
