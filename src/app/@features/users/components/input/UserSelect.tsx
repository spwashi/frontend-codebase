import React from "react";
import { useSelector } from "react-redux";
import { SelectInput } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { selectLoggedInUser } from "../../behaviors/login/redux/reducer";
import { useUserOptions } from "@features/users/hooks/useUserOptions";

type IUserSelectParams = { formKey: string };

export function UserSelect({ formKey }: IUserSelectParams) {
  const options = useUserOptions();
  const loggedInUsername = useSelector(selectLoggedInUser)?.username ?? "";
  return (
    <React.Fragment>
      <SelectInput
        value={loggedInUsername}
        placeholder="Username"
        formKey={formKey}
        options={options}
      />
    </React.Fragment>
  );
}
