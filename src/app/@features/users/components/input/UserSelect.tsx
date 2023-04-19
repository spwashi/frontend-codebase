import React from "react";
import { useSelector } from "react-redux";
import {
  SelectInput,
  SelectOption,
} from "@widgets/form/features/fields/components/input/select/SelectInput";
import { selectPossibleUsersList } from "../../services/redux/selectors";
import { selectLoggedInUser } from "../../behaviors/login/redux/reducer";

type IUserSelectParams = {
  formKey: string;
  ignoreLogin?: boolean;
};
export function UserSelect({ formKey }: IUserSelectParams) {
  const loggedInUsername = useSelector(selectLoggedInUser)?.username ?? "";
  const options: SelectOption[] = useSelector(selectPossibleUsersList);
  return (
    <React.Fragment>
      <SelectInput
        value={loggedInUsername}
        placeholder="User"
        formKey={formKey}
        options={options}
      />
    </React.Fragment>
  );
}
