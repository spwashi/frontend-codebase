import React, { useState } from "react";
import classNames from "classnames";
import { getButtonImageSrc } from "@core/components/sites/bane/util/getButtonImageSrc";

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
        className={classNames(["bane-button"])}
      >
        <figure className={classNames(["fade-image", loadedState])}>
          <img
            role="button"
            onLoad={onImageLoad}
            src={getButtonImageSrc()}
            alt="[The BaneButton]"
          />
          <figcaption>[The BaneButton]</figcaption>
        </figure>
      </button>
      <div className="stage-close" aria-hidden="true" />
    </div>
  );
}
