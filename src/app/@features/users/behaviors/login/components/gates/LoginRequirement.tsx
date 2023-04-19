import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { appClassnames } from "@core/styles/classNames";
import { useJwt } from "@services/jwt/hooks/useJwt";
import { FeatureRegistrationBoundary } from "@services/features/list/components/FeatureRegistrationBoundary";
import { IFeatureRegistrationContextState } from "@services/features/list/types";
import { selectLoggedInUserName } from "../../redux/reducer";

/**
 * An error message indicating that a user must log in
 */
function MustLoginErrorMessage({ children }: { children: ReactNode }) {
  const errorMsg = "Must be logged in to continue";
  const className = classNames([
    "message",
    appClassnames.requirements.login,
    appClassnames.states.isWidget,
  ]);
  const [registry, setRegistry] = useState<string[]>([]);
  const onAttemptRegister = (
    contextState: IFeatureRegistrationContextState
  ) => {
    setRegistry(Object.keys(contextState.features.available));
  };
  return (
    <FeatureRegistrationBoundary
      featuresDisabled={true}
      onAttemptRegister={onAttemptRegister}
    >
      <div className={className} data-error-msg={errorMsg}>
        <header>
          <span>{errorMsg}</span>
        </header>
        {registry.map((i) => (
          <div key={i}>{i}</div>
        ))}
        {children}
      </div>
    </FeatureRegistrationBoundary>
  );
}

/**
 * Only displays children if there is a LoggedIn user
 */
export function LoginRequirement({
  children,
  state = true,
}: {
  children: any;
  state?: boolean;
}) {
  const jwt = useJwt();
  const shouldBeLoggedIn = state;
  const userIsLoggedIn = !!(useSelector(selectLoggedInUserName) && jwt);
  if (userIsLoggedIn !== shouldBeLoggedIn) {
    return state ? (
      <MustLoginErrorMessage>{children}</MustLoginErrorMessage>
    ) : null;
  }
  return children;
}
