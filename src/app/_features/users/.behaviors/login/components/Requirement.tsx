import {useSelector} from 'react-redux';
import {selectLoggedInUserName} from '../redux/reducer';
import React from 'react';
import classNames from 'classnames';
import {appClassNames} from '../../../../../styles/classNames';
import {useJwt} from '../../../../../_services/jwt';

/**
 * An error message indicating that a user must login
 * @constructor
 */
function MustLoginErrorMessage() {
  const errorMsg  = 'Must be logged in to continue';
  const className = classNames(['message', appClassNames.requirements.login, appClassNames.states.isWidget]);
  return (
    <div className={className} data-error-msg={errorMsg}>
      <header>
        <span>{errorMsg}</span>
      </header>
    </div>
  );
}

/**
 * Only displays children if
 * @param children
 * @param state
 * @constructor
 */
export function LoggedIn({children, state = true}: { children: any, state?: boolean }) {
  const jwt              = useJwt();
  const shouldBeLoggedIn = state;
  const userIsLoggedIn   = !!(useSelector(selectLoggedInUserName) && jwt);
  if (userIsLoggedIn !== shouldBeLoggedIn) {
    return state ? <MustLoginErrorMessage/> : null;
  }
  return children;
}

/**
 * Only displays children when a user is not logged in
 * @param children
 * @constructor
 */
export const NotLoggedIn = ({children}: { children: any }) => {
  return <LoggedIn state={false}>{children}</LoggedIn>
}