import {loggerClassnames} from './environments/development/classNames';

export const appClassnames = {
  states:       {
    active:       'active',
    inactive:     'inactive',
    userLoggedIn: 'user-logged-in',
    isWidget:     'widget',
  },
  requirements: {
    login: 'must-login',
  },
  widgets:      {
    user: {
      logout: 'logout-button',
    },
  },
  permissions:  {
    noAdmin:       'no-admin',
    appCanBeAdmin: 'can-be-admin',
  },
  environments: {
    dev: {
      logger: loggerClassnames,
    },
  },
};