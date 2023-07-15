import React from "react";
import classNames from "classnames";
import { SiteLogoSvg } from "@core/util/SiteLogoSvg";

interface ButtonParams {
  onClick: () => void;
  isActivated: number;
}

export function Button({ onClick, isActivated }: ButtonParams) {
  return (
    <div className={classNames([isActivated ? "activated" : "deactivated"])}>
      <button onClick={onClick} className={classNames(["boof-button"])}>
        <figure className={classNames([])}>
          <SiteLogoSvg siteName="boof" />
          <figcaption>[The BoofButton]</figcaption>
        </figure>
      </button>
    </div>
  );
}
