import React, {useContext, useEffect, useMemo} from 'react';
import {SelectInput, SelectOption} from '../../../../components/form/input/select/SelectInput';
import {useSelector} from 'react-redux';
import {FormContext} from '../../../../components/form/context/FormContext';
import {updateFormItem} from '../../../../components/form/hooks/useFormItem';
import {selectPossibleUsersList} from '../../redux/selectors';
import {selectLoggedInUser} from '../../behaviors/login/redux/reducer';
import {AllUsersQuery} from '../query/all';
import {IUser} from '../../../../../.junction/models/user/models';
import {Value} from '../../../../components/form/input/text/Input';


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
      options = options.filter(({payload}) => payload.username === actual)
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