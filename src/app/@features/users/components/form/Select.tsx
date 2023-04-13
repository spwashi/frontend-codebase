import React, {useContext, useEffect, useMemo} from 'react';
import {SelectInput, SelectOption} from '@widgets/form/features/fields/components/input/select/SelectInput';
import {useSelector} from 'react-redux';
import {FormContext} from '@widgets/form/context/context';
import {updateFormItem} from '@widgets/form/features/fields/hooks/useFormItem';
import {selectPossibleUsersList} from '../../services/redux/selectors';
import {selectLoggedInUser} from '../../behaviors/login/redux/reducer';
import {AllUsersQuery} from '../../services/graphql/all';
import {IUser} from '@junction/models/user/models';
import {Value} from '@widgets/form/features/fields/components/input/text/Input';


export const getUserSelectorUsername = (data?: string | IUser) => {
  return typeof data === 'string' ? data : data?.username;
}

export const UserSelect = React.memo(
  ({formKey, ignoreLogin, username}: { username?: string; formKey: string; ignoreLogin?: boolean }) => {
    const loggedInUser            = useSelector(selectLoggedInUser);
    const context                 = useContext(FormContext);
    const options: SelectOption[] = useSelector(selectPossibleUsersList);
    const actual                  = getUserSelectorUsername(username ?? loggedInUser ?? undefined);

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
UserSelect.displayName = 'UserSelect'