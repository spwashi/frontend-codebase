import {loggerClassnames} from './dev';

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
    dev:  {
      logger: loggerClassnames,
    },
    user: {
      logout: 'logout-button',
    },
  },
  permissions:  {
    noAdmin:       'no-admin',
    appCanBeAdmin: 'can-be-admin',
  },
};