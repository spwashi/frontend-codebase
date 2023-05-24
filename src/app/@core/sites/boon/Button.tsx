import React, { useState } from "react";
import classNames from "classnames";
import { getButtonImageSrc } from "@core/util/getButtonImageSrc";

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
      <button
        onClick={() => {
          setLoadedState("unloaded");
          onClick();
        }}
        className={classNames(["boon-button"])}
      >
        <figure className={classNames(["fade-image", loadedState])}>
          <img
            role="button"
            onLoad={onImageLoad}
            src={getButtonImageSrc("boon")}
            alt="[The BoonButton]"
          />
          <figcaption>[The BoonButton]</figcaption>
        </figure>
      </button>
    </div>
  );
}
