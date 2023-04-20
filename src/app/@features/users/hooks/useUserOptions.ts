import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { useSelector } from "react-redux";
import { selectPossibleUsersOptions } from "@features/users/services/redux/selectors";

export function useUserOptions() {
  const options: SelectOption[] = useSelector(selectPossibleUsersOptions);
  return options;
}
