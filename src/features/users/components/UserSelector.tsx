import React, {useContext, useEffect} from 'react';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {useSelector} from 'react-redux';
import {FormContext} from '../../../components/form/FormContext';
import {updateFormItem} from '../../../components/form/hooks/useFormItemController';
import {selectPossibleUsersList} from '../redux/selectors';
import {selectLoggedInUserName} from '../features/login/redux/reducer';
import {AllUsersQuery} from './AllUsersQuery';

export const UserSelector = React.memo(
    ({formKey, ignoreLogin}: { formKey: string; ignoreLogin?: boolean }) => {
        const userOptions  = useSelector(selectPossibleUsersList);
        const loggedInUser = useSelector(selectLoggedInUserName);
        const context      = useContext(FormContext);
        useEffect(() => {
            updateFormItem(context, formKey, loggedInUser)
        }, [loggedInUser]);

        if (loggedInUser && !ignoreLogin) return null;
        return (
            <>
                {
                    !userOptions.length
                    ? <AllUsersQuery/>
                    : <SelectInput placeholder={'User'} formKey={formKey} options={userOptions}/>
                }
            </>
        );
    },
);