import React, {useContext, useEffect, useMemo} from 'react';
import {SelectInput, SelectOption} from '../../../../.widgets/@form/input/select/SelectInput';
import {useSelector} from 'react-redux';
import {FormContext} from '../../../../.widgets/@form/context/FormContext';
import {updateFormItem} from '../../../../.widgets/@form/hooks/useFormItem';
import {selectPossibleUsersList} from '../../redux/selectors';
import {selectLoggedInUser} from '../../behaviors/login/redux/reducer';
import {AllUsersQuery} from '../query/all';
import {IUser} from '../../../../../.junction/models/user/models';
import {Value} from '../../../../.widgets/@form/input/text/Input';


export const getUserSelectorUsername = (data?: string | IUser) => {
  return typeof data === 'string' ? data : data?.username;
}

export const UserSelect = React.memo(
  ({formKey, ignoreLogin, username}: { username?: string; formKey: string; ignoreLogin?: boolean }) => {
    let options: SelectOption[];

    const loggedInUser = useSelector(selectLoggedInUser);
    const context      = useContext(FormContext);
    options            = useSelector(selectPossibleUsersList);
    const actual       = getUserSelectorUsername(username ?? loggedInUser ?? undefined);

    useEffect(() => updateFormItem(context, formKey, username ?? loggedInUser), [loggedInUser, username]);
    const user = useMemo(() => ({username: actual}), [actual]);

    if (!ignoreLogin) {
      if (!(loggedInUser || username)) return <>No User Logged In</>
      return (
        <Value value={user} formKey={formKey}>{actual}</Value>
      )
    }

    return (
      <>
        {
          !options.length
          ? <AllUsersQuery/>
          : (
            <SelectInput
              value={actual}
              placeholder="User"
              formKey={formKey}
              options={options}
            />
          )
        }
      </>
    );
  },
);