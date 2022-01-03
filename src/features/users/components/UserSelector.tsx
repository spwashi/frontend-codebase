import React, {useContext, useEffect} from 'react';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {useSelector} from 'react-redux';
import {FormContext} from '../../../components/form/FormContext';
import {updateFormItem} from '../../../components/form/hooks/useFormItemController';
import {selectPossibleUsersList} from '../redux/selectors';
import {selectLoggedInUserName} from '../behaviors/login/redux/reducer';
import {AllUsersQuery} from './query/all';

export const UserSelector = React.memo(
    ({formKey, ignoreLogin}: { formKey: string; ignoreLogin?: boolean }) => {
        const options      = useSelector(selectPossibleUsersList);
        const loggedInUser = useSelector(selectLoggedInUserName);
        const context      = useContext(FormContext);

        useEffect(() => updateFormItem(context, formKey, loggedInUser), [loggedInUser]);

        const optionTitleMap =
                  new Map(
                      options.map(
                          ({title, value, user}) => {
                              return [title, user]
                          },
                      ),
                  );

        const optionValueMap =
                  new Map(
                      options.map(
                          ({title, value, user}) => {
                              return [value, user]
                          },
                      ),
                  );

        if (loggedInUser && !ignoreLogin) return null;
        return (
            <>
                {
                    !options.length
                    ? <AllUsersQuery/>
                    : <SelectInput
                        valueMapper={value => optionTitleMap.get(value)}
                        placeholder="User"
                        formKey={formKey}
                        options={options}
                    />
                }
            </>
        );
    },
);