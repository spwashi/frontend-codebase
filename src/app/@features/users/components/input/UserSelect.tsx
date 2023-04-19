import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  SelectInput,
  SelectOption,
} from "@widgets/form/features/fields/components/input/select/SelectInput";
import { updateFormItem } from "@widgets/form/features/fields/hooks/useFormItem";
import { IUser } from "@junction/models/user/models";
import { Value } from "@widgets/form/features/fields/components/input/text/Input";
import { selectPossibleUsersList } from "../../services/redux/selectors";
import { selectLoggedInUser } from "../../behaviors/login/redux/reducer";
import { UserListQuery } from "../../services/graphql/list/components/ListQuery";

export const getUserSelectorUsername = (
  data?: string | IUser | null | undefined
) => {
  return typeof data === "string" ? data : data?.username;
};

type IUserSelectParams = {
  formKey: string;
  ignoreLogin?: boolean;
};
export function UserSelect({ formKey, ignoreLogin }: IUserSelectParams) {
  const loggedInUser = useSelector(selectLoggedInUser);
  const options: SelectOption[] = useSelector(selectPossibleUsersList);
  const actual = getUserSelectorUsername(loggedInUser);
  useEffect(() => {
    const value = loggedInUser;
    updateFormItem(formKey, value);
  }, [loggedInUser]);
  const user = useMemo(() => ({ username: actual }), [actual]);

  if (!ignoreLogin) {
    if (!loggedInUser) return <>No User Logged In</>;
    return (
      <Value value={user} formKey={formKey}>
        {actual}
      </Value>
    );
  }

  return (
    <>
      {!options.length ? (
        <UserListQuery />
      ) : (
        <SelectInput
          value={actual}
          placeholder="User"
          formKey={formKey}
          options={options}
        />
      )}
    </>
  );
}
