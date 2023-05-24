import React, { useCallback, useContext, useState } from "react";
import { useSelector } from "react-redux";
import ReactJson from "react-json-view";
import classNames from "classnames";
import { appClassnames as classes } from "../../styles/classNames";
import { Dev } from "./Dev";
import { FeatureContextExternal } from "@widgets/feature/context/group/context";
import { FeatureContextInternal } from "@widgets/feature/context/internal/context";
import {
  CurrentFeatureName,
  Feature,
} from "@widgets/feature/components/Feature";
import { featureIds } from "@identities/features/ids";

const LOGGER = classes.widgets.dev.logger;

type StyleOptions = "json" | "plain";

type type = {
  style?: StyleOptions;
  open?: boolean;
  children: any;
  title?: string;
  error?: any;
  logReason?: string | null;
};

function useBinaryState(
  defaultState?: boolean
): [boolean, (force?: boolean) => void] {
  const [state, setState] = useState(!!defaultState);

  const pushToggle = useCallback((force?: boolean) => {
    if (typeof force != void 0) setState(!!force);
    else setState((state) => !state);
  }, []);

  return [state, pushToggle];
}

export function Log({
  children,
  style = "json",
  open,
  logReason = null,
  error,
  title,
}: type) {
  const [isActive, toggleActive] = useBinaryState(false);
  return (
    <Dev>
      <div
        className={classNames([
          LOGGER.components.container,
          isActive ? classes.states.active : classes.states.inactive,
        ])}
      >
        <div className={classNames([LOGGER.components.controls])}>
          <button
            className={isActive ? "deactivate" : "activate"}
            onClick={() => toggleActive(!isActive)}
          >
            {isActive ? "close" : "open"} the Log <CurrentFeatureName />
          </button>
        </div>
        <div className={LOGGER.components.wrapper}>
          <details
            open={open}
            className={LOGGER.devLog + (error ? " error" : "")}
          >
            {title && (
              <summary>
                <span>{title}</span> <span className="reason">{logReason}</span>{" "}
                <span className="generic">[devlog]</span>
              </summary>
            )}
            {children &&
              (style === "json" ? (
                <ReactJson src={JSON.parse(JSON.stringify(children))} />
              ) : (
                <pre>{JSON.stringify(children, null, 3)}</pre>
              ))}
          </details>
        </div>
      </div>
    </Dev>
  );
}

export function LogAppReduxState({
  open,
  style,
}: {
  style?: StyleOptions;
  open?: boolean;
}) {
  const state = useSelector((state) => state);
  return (
    <Feature name={featureIds.app.application_state}>
      <Log title={"App State"} style={style} open={open}>
        {state}
      </Log>
    </Feature>
  );
}
